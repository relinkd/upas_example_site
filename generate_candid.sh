cargo build --release --target wasm32-unknown-unknown --package example_backend
candid-extractor target/wasm32-unknown-unknown/release/indexer.wasm > src/example_backend/example_backend.did