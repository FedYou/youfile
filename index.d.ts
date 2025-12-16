type EncodingOptions =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'utf-16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'binary'
  | 'hex'

interface Write {
  /**
   * Write a file asynchronously.
   *
   * @param path - File path.
   * @param data - File contents.
   * @param options - File options.
   * @param options.encoding - File encoding.
   */
  file(path: string, data: any, options?: { encoding?: EncodingOptions }): Promise<void>

  /**
   * Write a directory asynchronously.
   *
   * @param path - Directory path.
   * @param options - Directory options.
   * @param options.recursive - Create all parent directories if they don't exist.
   */
  dir(path: string, options?: { recursive?: boolean }): Promise<void>

  /**
   * Write a json file with objects asynchronously.
   *
   * @param path - File path.
   * @param data - File contents.
   * @param options - File options.
   * @param options.spaces - Number of formatting spaces in the json file, default is 0.
   */
  json(path: string, data: object, options?: { spaces?: number }): Promise<void>
}

interface WriteSync {
  /**
   * Write a file synchronously.
   *
   * @param path - File path.
   * @param data - File contents.
   * @param options - File options.
   * @param options.encoding - File encoding.
   */
  file(path: string, data: any, options?: { encoding?: EncodingOptions }): void

  /**
   * Write a directory synchronously.
   *
   * @param path - Directory path.
   * @param options - Directory options.
   * @param options.recursive - Create all parent directories if they don't exist.
   */
  dir(path: string, options?: { recursive?: boolean }): void

  /**
   * Write a json file with objects synchronously.
   *
   * @param path - File path.
   * @param data - File contents.
   * @param options - File options.
   * @param options.spaces - Number of formatting spaces in the json file, default is 0.
   */
  json(path: string, data: object, options?: { spaces?: number }): void
}

interface Read {
  /**
   * Returns the contents of the file asynchronously.
   *
   * @param path - File path.
   * @param options - File options.
   * @param options.encoding - File encoding.
   */

  file(path: string, options?: { encoding?: null | undefined }): Promise<Buffer>
  file(path: string, options?: { encoding?: EncodingOptions }): Promise<string>

  /**
   * Returns the contents of the file json format as a object asynchronously.
   *
   * @param path - File path.
   * @param options - File options.
   * @param options.comments - Read the json file if it has comments.
   */
  json(path: string, options?: { comments?: boolean }): Promise<object>
}

interface ReadSync {
  /**
   * Returns the contents of the file synchronously.
   *
   * @param path - File path.
   * @param options - File options.
   * @param options.encoding - File encoding.
   */
  file(path: string, options?: { encoding?: null | undefined }): Buffer
  file(path: string, options?: { encoding?: EncodingOptions }): string

  /**
   * Returns the contents of the file json format as a object synchronously.
   *
   * @param path - File path.
   * @param options - File options.
   * @param options.comments - Read the json file if it has comments.
   */
  json(path: string, options?: { comments?: boolean }): object
}

interface Search {
  /**
   * Return all paths of files in a directory asynchronously.
   *
   * @param path - Directory path.
   * @param options - Directory options.
   * @param options.recursive - Read all internal directories
   * @param options.extname - File extension to search.
   */
  files(path: string, options?: { recursive?: boolean; extname?: string }): Promise<string[]>

  /**
   * Return all paths of folders in a directory asynchronously.
   *
   * @param path - Directory path.
   * @param options - Directory options.
   * @param options.recursive - Read all internal directories
   */
  dirs(path: string, options?: { recursive?: boolean }): Promise<string[]>
}

interface SearchSync {
  /**
   * Return all paths of files in a directory synchronously.
   *
   * @param path - Directory path.
   * @param options - Directory options.
   * @param options.recursive - Read all internal directories
   * @param options.extname - File extension to search.
   */
  files(path: string, options?: { recursive?: boolean; extname?: string }): string[]

  /**
   * Return all paths of folders in a directory synchronously.
   *
   * @param path - Directory path.
   * @param options - Directory options.
   * @param options.recursive - Read all internal directories
   */
  dirs(path: string, options?: { recursive?: boolean }): string[]
}

interface Sha256 {
  /**
   * Calculates the SHA-256 hash of a file asynchronously.
   *
   * @param filePath - The file path.
   */
  byFile(filePath: string): Promise<string>

  /**
   * Calculates the SHA-256 hash of a string asynchronously.
   *
   * @param string - The string.
   */
  byString(string: string): Promise<string>
}

interface Sha256Sync {
  /**
   * Calculates the SHA-256 hash of a file synchronously.
   *
   * @param filePath - The file path.
   */
  byFile(filePath: string): string

  /**
   * Calculates the SHA-256 hash of a string synchronously.
   *
   * @param string - The string.
   */
  byString(string: string): string
}

declare namespace youfile {
  const Write: Write
  const WriteSync: WriteSync
  const Read: Read
  const ReadSync: ReadSync
  const Search: Search
  const SearchSync: SearchSync
  const Sha256: Sha256
  const Sha256Sync: Sha256Sync

  /**
   * Deletes files and directories asynchronously.
   *
   * @param path - Directory or file path.
   * @param options - Directory options.
   * @param options.exists - Delete only if the path exists.
   */
  function remove(path: string, options?: { exists?: boolean }): Promise<void>

  /**
   * Deletes files and directories synchronously.
   *
   * @param path - Directory or file path.
   * @param options - Directory options.
   * @param options.exists - Delete only if the path exists.
   */
  function removeSync(path: string, options?: { exists?: boolean }): void

  /**
   * Checks if a file or directory exists asynchronously.
   *
   * @param path - Directory path..
   */
  function exists(path: string): Promise<boolean>

  /**
   * Checks if a file or directory exists synchronously.
   *
   * @param path - Directory path.
   */
  function existsSync(path: string): boolean

  /**
   * Copy files and directories asynchronously.
   *
   * @param path - Directory or file path.
   * @param dest - Destination path of the directory or file.
   */
  function copy(path: string, dest: string): Promise<void>

  /**
   * Copy files and directories synchronously.
   *
   * @param path - Directory or file path.
   * @param dest - Destination path of the directory or file.
   */
  function copySync(path: string, dest: string): void

  /**
   * Move files and directories asynchronously.
   *
   * @param path - Directory or file path.
   * @param dest - Destination path of the directory or file.
   */
  function move(path: string, dest: string): Promise<void>

  /**
   * Move files and directories synchronously.
   *
   * @param path - Directory or file path.
   * @param dest - Destination path of the directory or file.
   */
  function moveSync(path: string, dest: string): void
}

export = youfile
export as namespace youfile
