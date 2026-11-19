use crate::methods::GetFileBuilder;
use crate::runtime::{default_transport, BoxFuture, Error, Transport};
use crate::Api;
use std::path::Path;
use std::sync::Arc;

pub trait HasFile {
    fn file_id(&self) -> &str;

    fn file_path(&self) -> Option<&str> {
        None
    }
}

pub trait Download: HasFile {
    fn download(&self) -> BoxFuture<'_, Result<Vec<u8>, Error>> {
        Box::pin(fetch(
            None,
            self.file_id().to_owned(),
            self.file_path().map(str::to_owned),
        ))
    }

    fn download_to<'a>(
        &'a self,
        path: impl AsRef<Path> + Send + 'a,
    ) -> BoxFuture<'a, Result<(), Error>> {
        let bytes = self.download();
        Box::pin(async move { save(bytes.await?, path.as_ref()).await })
    }
}

impl<T: HasFile + ?Sized> Download for T {}

impl Api {
    pub async fn download(&self, file: &impl HasFile) -> Result<Vec<u8>, Error> {
        fetch(
            Some(self.transport.clone()),
            file.file_id().to_owned(),
            file.file_path().map(str::to_owned),
        )
        .await
    }

    pub async fn download_to(
        &self,
        file: &impl HasFile,
        path: impl AsRef<Path>,
    ) -> Result<(), Error> {
        let bytes = self.download(file).await?;
        save(bytes, path.as_ref()).await
    }
}

async fn fetch(
    transport: Option<Arc<dyn Transport>>,
    file_id: String,
    known_path: Option<String>,
) -> Result<Vec<u8>, Error> {
    let transport = transport
        .or_else(default_transport)
        .ok_or(Error::NoTransport)?;

    let path = match known_path {
        Some(path) => path,
        None => {
            let file = GetFileBuilder::new(file_id)
                .with_transport(transport.clone())
                .await?;
            file.file_path.ok_or_else(|| {
                Error::Transport(
                    "Telegram returned no `file_path`: the file is probably larger than 20 MB"
                        .into(),
                )
            })?
        }
    };
    transport.download(path).await
}

async fn save(bytes: Vec<u8>, path: &Path) -> Result<(), Error> {
    let io_error = |e: std::io::Error| Error::Transport(format!("{}: {e}", path.display()));
    if let Some(dir) = path.parent().filter(|d| !d.as_os_str().is_empty()) {
        tokio::fs::create_dir_all(dir).await.map_err(io_error)?;
    }
    tokio::fs::write(path, bytes).await.map_err(io_error)
}
