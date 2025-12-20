# YouFile

Manage your files and directories quickly and easily.

> When doing `write`, `copy`, `move` if the directory does not exist it will be created automatically.

## Installation

### Module

```js
import youfile from 'youfile'
```

### Commonjs

```js
const youfile = require('youfile')
```

## Methods Async

### `Write.file(path, data, options?): Promise<void>`

Write a file asynchronously.

- `path: string` - File path.
- `data: any` - File contents.
- `options?: { encoding }` - File options.
  - `encoding?: string` - File encoding.

### `Write.dir(path, options?): Promise<void>`

Write a directory asynchronously.

- `path: string` - Directory path.
- `options?: { recursive }` - Directory options.
  - `recursive?: boolean` - Create all parent directories if they don't exist.

### `Write.json(path, data, options?): Promise<void>`

Write a json file with objects asynchronously.

- `path: string` - File path.
- `data: object` - File contents.
- `options?: { spaces }` - File options.
  - `spaces?: number` - Number of formatting spaces in the json file, default is 0.

---

### `Read.file(path, options?): Promise<Buffer | string>`

Returns the contents of the file asynchronously.

- `path: string` - File path.
- `options?: { encoding }` - File options.
  - `encoding?: string` - File encoding.

### `Read.json(path, options?): Promise<object>`

Returns the contents of the file json format as a object asynchronously.

- `path: string` - File path.
- `options?: { comments }` - File options.
  - `comments?: boolean` - Read the json file if it has comments.

---

### `Search.files(path, options?): Promise<string[]>`

Return all paths of files in a directory asynchronously.

- `path: string` - Directory path.
- `options?: { recursive, extname }` - Directory options.
  - `recursive?: boolean` - Read all internal directories
  - `extname?: string` - File extension to search.

### `Search.dirs(path, options?): Promise<string[]>`

Return all paths of folders in a directory asynchronously.

- `path: string` - Directory path.
- `options?: { recursive }` - Directory options.
  - `recursive?: boolean` - Read all internal directories

---

### `Sha256.byFile(path): Promise<string>`

Calculates the SHA-256 hash of a file asynchronously.

- `path: string` - The file path.

### `Sha256.byString(string): Promise<string>`

Calculates the SHA-256 hash of a string asynchronously.

- `string: string` - The string.

## Methods Sync

### `WriteSync.file(path, data, options?): void`

Write a file synchronously.

- `path: string` - File path.
- `data: any` - File contents.
- `options?: { encoding }` - File options.
  - `encoding?: string` - File encoding.

### `WriteSync.dir(path, options?): void`

Write a directory synchronously.

- `path: string` - Directory path.
- `options?: { recursive }` - Directory options.
  - `recursive?: boolean` - Create all parent directories if they don't exist.

### `WriteSync.json(path, data, options?): void`

Write a json file with objects synchronously.

- `path: string` - File path.
- `data: object` - File contents.
- `options?: { spaces }` - File options.
  - `spaces?: number` - Number of formatting spaces in the json file, default is 0.

---

### `ReadSync.file(path, options?): Buffer | string`

Returns the contents of the file synchronously.

- `path: string` - File path.
- `options?: { encoding }` - File options.
  - `encoding?: string` - File encoding.

### `ReadSync.json(path, options?): object`

Returns the contents of the file json format as a object synchronously.

- `path: string` - File path.
- `options?: { comments }` - File options.
  - `comments?: boolean` - Read the json file if it has comments.

---

### `SearchSync.files(path, options?): string[]`

Return all paths of files in a directory synchronously.

- `path: string` - Directory path.
- `options?: { recursive, extname }` - Directory options.
  - `recursive?: boolean` - Read all internal directories
  - `extname?: string` - File extension to search.

### `SearchSync.dirs(path, options?): string[]`

Return all paths of folders in a directory synchronously.

- `path: string` - Directory path.
- `options?: { recursive }` - Directory options.
  - `recursive?: boolean` - Read all internal directories

### `Sha256Sync.byFile(path): string`

Calculates the SHA-256 hash of a file synchronously.

- `path: string` - The file path.

---

### `Sha256Sync.byString(string): string`

Calculates the SHA-256 hash of a string synchronously.

- `string: string` - The string.
