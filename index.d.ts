/**
 *
 * Manage your files and folders quickly and easily.
 *
 */
declare namespace youfile {
  type EncodingOption =
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
  namespace write {
    /**
     * Create a directory.
     *
     * @param {string} dirname - Directory path.
     */
    function dir(dirname: string): Promise<void>
    /**
     * Create a directory synchronously.
     *
     * @param {string} dirname - Directory path.
     */
    function dirSync(dirname: string): void
    /**
     * Create a file.
     *
     * @param {string} path - File path.
     * @param {string} data - File contents.
     * @param {string} encoding - File encoding.
     */
    function file(
      path: string,
      data: any,
      encoding?: EncodingOption
    ): Promise<void>
    /**
     * Create a file synchronously.
     *
     * @param {string} path - File path.
     * @param {string} data - File contents.
     * @param {string} encoding - File encoding.
     */
    function fileSync(path: string, data: any, encoding?: EncodingOption): void
    /**
     * Create a json file with objects.
     *
     * @param {string} path - File path.
     * @param {object} data - File contents.
     * @param {number} spaces - Number of formatting spaces in the json file, default is 0.
     */
    function json(path: string, data: object, spaces: number): Promise<void>
    /**
     * Create a json file with objects synchronously.
     *
     * @param {string} path - File path.
     * @param {object} data - File contents.
     * @param {number} spaces - Number of formatting spaces in the json file, default is 0.
     */
    function jsonSync(path: string, data: object, spaces: number): void
  }

  namespace read {
    /**
     * Returns the contents of the file.
     *
     * @param {string} path - File path.
     * @param {string} encoding - File encoding.
     */
    function file(path: string, encoding?: EncodingOption): Promise<Buffer>
    /**
     * Returns the contents of the file synchronously.
     *
     * @param {string} path - File path.
     * @param {string} encoding - File encoding.
     */
    function fileSync(path: string, encoding?: EncodingOption): Buffer
    /**
     * Returns the contents of the file json format as a object.
     *
     * @param {string} path - File path.
     */
    function json(path: string): Promise<object>
    /**
     * Returns the contents of the file json format as a object synchronously.
     *
     * @param {string} path - File path.
     */
    function jsonSync(path: string): object
    /**
     * Returns the contents of the file json format as a object, allows reading json with comments.
     *
     * @param {string} path - File path.
     */
    function json5(path: string): Promise<object>
    /**
     * Returns the contents of the file json format as a object synchronously, allows reading json with comments.
     *
     * @param {string} path - File path.
     */
    function json5Sync(path: string): object
  }
  namespace get {
    /**
     * Return all paths of files in a directory.
     *
     * @param {string} dirname - Directory path.
     */
    function allFiles(dirname: string): Promise<string[]>
    /**
     * Return all paths of files in a directory synchronously.
     *
     * @param {string} dirname - Directory path.
     */
    function allFilesSync(dirname: string): string[]
    /**
     * Return all paths of folders in a directory.
     *
     * @param {string} dirname - Directory path.
     */
    function allFolders(dirname: string): Promise<string[]>
    /**
     * Return all paths of folders in a directory synchronously.
     *
     * @param {string} dirname - Directory path.
     */
    function allFoldersSync(dirname: string): string[]
    /**
     * Returns all paths of files in a directory with a specific extension.
     *
     * @param {string} dirname - Directory path.
     * @param {string} extname - Extension to search.
     */
    function allExtFiles(dirname: string, extname: string): Promise<string[]>
    /**
     * Returns all paths of files in a directory with a specific extension synchronously.
     *
     * @param {string} dirname - Directory path.
     * @param {string} extname - Extension to search.
     */
    function allExtFilesSync(dirname: string, extname: string): string[]
    /**
     * Return all files that are in the same directory with a specified extension.
     *
     * @param {string} dirname - Directory path.
     * @param {string} extname - Extension to search.
     */
    function extFiles(dirname: string, extname: string): Promise<string[]>
    /**
     * Return all files that are in the same directory with a specified extension synchronously.
     *
     * @param {string} dirname - Directory path.
     * @param {string} extname - Extension to search.
     */
    function extFilesSync(dirname: string, extname: string): string[]
    /**
     * Returns all paths of files that are in the same directory.
     * @param {string} dirname - Directory path.
     */
    function files(dirname: string): Promise<string[]>
    /**
     * Returns all paths of files that are in the same directory synchronously
     * .
     * @param {string} dirname - Directory path.
     */
    function filesSync(dirname: string): string[]
    /**
     * Returns all paths of folders that are in the same directory.
     *
     * @param {string} dirname - Directory path.
     */
    function folders(dirname: string): Promise<string[]>
    /**
     * Returns all paths of folders that are in the same directory synchronously.
     *
     * @param {string} dirname - Directory path.
     */
    function foldersSync(dirname: string): string[]
    /**
     * Calculates the SHA-256 hash of a file.
     *
     * @param {string} filePath - The file path.
     *
     */
    function sha256(filePath: string): Promise<string>
    /**
     * Calculates the SHA-256 hash of a file synchronously.
     *
     * @param {string} filePath - The file path.
     *
     */
    function sha256Sync(filePath: string): string
  }
  /**
   * Deletes files and directories.
   *
   * @param {string} path - Directory or file path.
   */
  function remove(path: string): Promise<void>
  /**
   * Deletes files and directories synchronously.
   *
   * @param {string} path - Directory or file path.
   */
  function removeSync(path: string): void
  /**
   * Deletes files and directories if they exist.
   *
   * @param {string} path - Directory or file path.
   */
  function removeExists(path: string): Promise<void>
  /**
   * Deletes files and directories if they exist synchronously.
   *
   * @param {string} path - Directory or file path.
   */
  function removeExistsSync(path: string): void
  /**
   * Checks if a file or directory exists.
   *
   * @param {string} path - Directory or file path.
   * @returns {boolean} True if the file or directory exists, false otherwise.
   */
  function exists(path: string): Promise<boolean>
  /**
   * Checks if a file or directory exists synchronously.
   *
   * @param {string} path - Directory or file path.
   * @returns {boolean} True if the file or directory exists, false otherwise.
   */
  function existsSync(path: string): boolean
  /**
   * Copy files and directories.
   *
   * @param {string} path - Directory or file path.
   * @param {string} dest - Destination path of the directory or file.
   */
  function copy(path: string, dest: string): Promise<void>
  /**
   * Copy files and directories synchronously.
   *
   * @param {string} path - Directory or file path.
   * @param {string} dest - Destination path of the directory or file.
   */
  function copySync(path: string, dest: string): void
  /**
   * Move files and directories.
   *
   * @param {string} path - Directory or file path.
   * @param {string} dest - Destination path of the directory or file.
   */
  function move(path: string, dest: string): Promise<void>
  /**
   * Move files and directories synchronously.
   *
   * @param {string} path - Directory or file path.
   * @param {string} dest - Destination path of the directory or file.
   */
  function moveSync(path: string, dest: string): void
}

export = youfile
export as namespace youfile
