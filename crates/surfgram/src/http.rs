use crate::errors::ApiError;
use crate::runtime::{BoxFuture, Error, Transport};
use crate::upload::Attachment;
use reqwest::multipart::{Form, Part};
use reqwest::{Client, Proxy, RequestBuilder};
use serde_json::Value;
use std::any::Any;

const API_URL: &str = "https://api.telegram.org";

pub struct HttpTransport {
    client: Client,
    base_url: String,
    file_url: String,
    token: String,
}

impl HttpTransport {
    pub fn new(token: impl AsRef<str>) -> Self {
        Self::with_api_url(API_URL, token)
    }

    pub fn with_api_url(api_url: impl AsRef<str>, token: impl AsRef<str>) -> Self {
        Self::with_api_url_and_optional_proxy(api_url, token, None::<&str>)
            .expect("failed to build the HTTP client")
    }

    pub fn with_proxy(mut self, proxy_url: impl AsRef<str>) -> Result<Self, Error> {
        let proxy = Proxy::all(proxy_url.as_ref())
            .map_err(|e| Error::Transport(e.without_url().to_string()))?;
        self.client = Client::builder()
            .proxy(proxy)
            .build()
            .map_err(|e| Error::Transport(e.without_url().to_string()))?;
        Ok(self)
    }

    pub fn token(&self) -> &str {
        &self.token
    }

    fn with_api_url_and_optional_proxy(
        api_url: impl AsRef<str>,
        token: impl AsRef<str>,
        proxy_url: Option<impl AsRef<str>>,
    ) -> Result<Self, Error> {
        let mut builder = Client::builder();
        if let Some(proxy_url) = proxy_url {
            let proxy = Proxy::all(proxy_url.as_ref())
                .map_err(|e| Error::Transport(e.without_url().to_string()))?;
            builder = builder.proxy(proxy);
        }
        let client = builder
            .build()
            .map_err(|e| Error::Transport(e.without_url().to_string()))?;

        let token = token.as_ref().to_owned();
        let api_url = api_url.as_ref().trim_end_matches('/');
        Ok(Self {
            client,
            base_url: format!("{api_url}/bot{token}"),
            file_url: format!("{api_url}/file/bot{token}"),
            token,
        })
    }

    async fn execute(request: RequestBuilder) -> Result<Value, Error> {
        let response = request
            .send()
            .await
            .map_err(|e| Error::Transport(e.without_url().to_string()))?;
        let body: Value = response
            .json()
            .await
            .map_err(|e| Error::Transport(e.without_url().to_string()))?;

        Self::interpret(body)
    }

    fn interpret(body: Value) -> Result<Value, Error> {
        match body.get("ok").and_then(Value::as_bool) {
            Some(true) => Ok(body.get("result").cloned().unwrap_or(Value::Null)),
            Some(false) => match serde_json::from_value::<ApiError>(body) {
                Ok(err) => Err(Error::Api(err)),
                Err(error) => Err(Error::Transport(format!(
                    "failed to decode the error response: {error}"
                ))),
            },
            None => Err(Error::Transport(
                "malformed response: missing `ok`".into(),
            )),
        }
    }
}

impl Transport for HttpTransport {
    fn send(&self, method: &'static str, params: Value) -> BoxFuture<'_, Result<Value, Error>> {
        Box::pin(async move {
            let url = format!("{}/{}", self.base_url, method);
            Self::execute(self.client.post(url).json(&params)).await
        })
    }

    fn send_multipart(
        &self,
        method: &'static str,
        params: Value,
        files: Vec<Attachment>,
    ) -> BoxFuture<'_, Result<Value, Error>> {
        Box::pin(async move {
            let url = format!("{}/{}", self.base_url, method);

            let mut form = Form::new();
            if let Value::Object(map) = params {
                for (key, value) in map {
                    let text = match value {
                        Value::Null => continue,
                        Value::String(text) => text,
                        other => other.to_string(),
                    };
                    form = form.text(key, text);
                }
            }

            for file in files {
                let data = file.read().await?;
                let mut part = Part::bytes(data).file_name(file.file_name());
                if let Some(mime) = file.mime_type() {
                    part = part
                        .mime_str(mime)
                        .map_err(|e| Error::Transport(e.to_string()))?;
                }
                form = form.part(file.name().to_string(), part);
            }

            Self::execute(self.client.post(url).multipart(form)).await
        })
    }

    fn download(&self, file_path: String) -> BoxFuture<'_, Result<Vec<u8>, Error>> {
        Box::pin(async move {
            let url = format!("{}/{}", self.file_url, file_path.trim_start_matches('/'));
            let response = self
                .client
                .get(url)
                .send()
                .await
                .map_err(|e| Error::Transport(e.without_url().to_string()))?;
            let status = response.status();
            if !status.is_success() {
                return Err(Error::Transport(format!(
                    "failed to download the file: HTTP {status}"
                )));
            }
            let bytes = response
                .bytes()
                .await
                .map_err(|e| Error::Transport(e.without_url().to_string()))?;
            Ok(bytes.to_vec())
        })
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}
