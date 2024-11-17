# YouFile

Manage your files and folders quickly and easily

> When doing `write`, `copy`, `move` if the directory does not exist it will be created automatically.

## Installation

### Module

```js
import youfile from "youfile";
```

### Commonjs

```js
const youfile = require("youfile");
```

## write

### file

You can create files with `objects` as well as with `strings`.

With `strings`:

```js
youfile.write.file(path, "data");
```

With `objects`:

```js
youfile.write.json(path, { data: true });
```

You can also define the amount of formatting spaces in the json file, default is 0.

```js
youfile.write.json(path, { data: true }, 4);
```

### dir

> If when creating the folder the directory does not exist, it will be created automatically.

```js
youfile.write.dir(path);
```

## Read

Returns the contents of the file in a `string`:

```js
youfile.read.file(path);
```

Returns the contents of the file in an `object`:

```js
youfile.read.json(path);
```

You can also read files with comments:

```js
youfile.read.json5(path);
```

## Get

### sha256

Returns a `promise` with the file's SHA-256 hash as a `string`

```js
youfile.get.sha256(path);
```

### folders

Returns an `array` of all folders in the same directory

```js
youfile.get.folders(path);
```

### files

Returns an `array` of all files in the same directory

```js
youfile.get.files(path);
```

### allFolders

Returns an `array` of all folders within the directory

```js
youfile.get.allFolders(path);
```

### allFiles

Returns an `array` of all files within the directory

```js
youfile.get.allFiles(path);
```

## Search

### extnameFiles

Returns an `array` of all files with a specific extension in the same directory:

```js
youfile.search.extnameFiles(path, ".ext");
```

### nameFiles

Returns an `array` of all files with a specific name in the same directory

```js
youfile.search.nameFiles(path, "text.txt");
```

### allExtnameFiles

Returns an `array` of all files with a specific extension in the directory

```js
youfile.search.allExtnameFiles(path, ".ext");
```

### allNameFiles

Returns an `array` of all files with a specific name in the directory

```js
youfile.search.allNameFiles(path, "text.txt");
```

## Other Functions

### exists

Returns a `boolean` indicating whether the file or directory exists

```js
youfile.exists(path);
```

### remove

Deletes files and directories

```js
youfile.remove(path);
```

### removeExists

Deletes files and directories if they exist

```js
youfile.removeExists(path);
```

### copy

Copies files and directories

```js
youfile.copy(path, dest);
```

### move

Moves files or directories

```js
youfile.move(path, dest);
```
