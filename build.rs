use std::{
    env,
    error::Error,
    fs::{self, OpenOptions},
    io,
    path::{Path, PathBuf},
};

const API_URL: &str = "https://corefork.telegram.org/bots/api.json";

fn main() {
    if let Err(error) = run() {
        eprintln!("surfgram-codegen: {error}");
        std::process::exit(1);
    }
}

fn run() -> Result<(), Box<dyn Error>> {
    let schema = schema_path();
    let out_dir = PathBuf::from(env::var("OUT_DIR")?);

    sync(API_URL, &schema)?;

    println!("cargo:rerun-if-env-changed=SURFGRAM_API_JSON");
    println!("cargo:rerun-if-changed={}", schema.display());

    match env::var("CARGO_PKG_NAME")?.as_str() {
        "surfgram" => surfgram_codegen::generate_api(&schema, &out_dir)?,
        "surfgram-macros" => {
            surfgram_codegen::generate_macros(&schema, &out_dir)?
        }
        package => {
            return Err(format!("unexpected package {package:?}").into());
        }
    }

    Ok(())
}

fn schema_path() -> PathBuf {
    env::var_os("SURFGRAM_API_JSON")
        .map(PathBuf::from)
        .unwrap_or_else(|| home_dir().join(".surfgram").join("api.json"))
}

fn home_dir() -> PathBuf {
    env::var_os("HOME")
        .or_else(|| env::var_os("USERPROFILE"))
        .map(PathBuf::from)
        .unwrap_or_else(|| PathBuf::from("."))
}

fn sync(url: &str, path: &Path) -> Result<(), Box<dyn Error>> {
    if let Some(parent) = path.parent().filter(|p| !p.as_os_str().is_empty()) {
        fs::create_dir_all(parent)?;
    }

    let lock = OpenOptions::new()
        .create(true)
        .truncate(false)
        .write(true)
        .open(path.with_extension("lock"))?;

    lock.lock()?;

    let body = ureq::get(url)
        .set(
            "User-Agent",
            concat!("surfgram-build/", env!("CARGO_PKG_VERSION")),
        )
        .call()?
        .into_string()?;

    if is_unchanged(path, body.as_bytes())? {
        return Ok(());
    }

    write_atomic(path, body.as_bytes())?;

    Ok(())
}

fn is_unchanged(path: &Path, body: &[u8]) -> io::Result<bool> {
    match fs::read(path) {
        Ok(current) => Ok(current == body),
        Err(error) if error.kind() == io::ErrorKind::NotFound => Ok(false),
        Err(error) => Err(error),
    }
}

fn write_atomic(path: &Path, body: &[u8]) -> io::Result<()> {
    let tmp = path.with_extension("json.tmp");

    fs::write(&tmp, body)?;
    fs::rename(tmp, path)?;

    Ok(())
}
