# YouFile

Manage your files and folders quickly and easily

> When doing `write`, `copy`, `move` if the directory does not exist it will be created automatically.

## Installation

### Module

```js
import yfile from "youfile";
```

### Commonjs

```js
const yfile = require("youfile");
```

## File creation

You can create files with `objects` as well as with `strings`.

With `strings`:

```js
yfile.write.file(path, "data");
```

With `objects`:

```js
yfile.write.json(path, { data: true });
```

You can also define the amount of formatting spaces in the json file, default is 0.

```js
yfile.write.json(path, { data: true }, 4);
```

## Folder creation

If when creating the folder the directory does not exist, it will be created automatically.

```js
yfile.write.dir(path);
```

## Reading files and directories

### Files

Returns the contents of the file in a `string`:

```js
yfile.read.file(path);
```

Returns the contents of the file in an `object`:

```js
yfile.read.json(path);
```

You can also read files with comments:

```js
yfile.read.json5(path);
```

### Directories

Returns an `array` with all folders that are in the same directory:

```js
yfile.read.dir.getFolders(path);
```

Returns an `array` with all the files that are in the same directory:

```js
yfile.read.dir.getFiles(path);
```

Returns an `array` with all the files with a specified extension that are in the same directory:

```js
yfile.read.dir.getExtnameFiles(path, ".ext");
```

Returns an `array` with all the folders contained in the directory:

```js
yfile.read.dir.getAllFolders(path);
```

Returns an `array` with all the files contained in the directory:

```js
yfile.read.dir.getAllFiles(path);
```

Returns an `array` with all files with a specified extension contained in the directory:

```js
yfile.read.dir.getAllExtnameFiles(path, ".ext");
```

## Deletes files and directories

```js
yfile.remove(path);
```

## Copy files and directories

```js
yfile.copy(path, dest);
```

## Move files and directories

```js
yfile.move(path, dest);
```
