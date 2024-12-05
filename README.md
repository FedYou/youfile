# YouFile

Manage your files and folders quickly and easily.

> When doing `write`, `copy`, `move` if the directory does not exist it will be created automatically.

> All functions have their own version promises as well as synchronization.

## Installation

### Module

```js
import youfile from 'youfile'
```

### Commonjs

```js
const youfile = require('youfile')
```

## write

### file

You can create files with `objects` as well as with other data such as `fs.writeFile`.

```js
youfile.write.file(path, 'data')
youfile.write.file(path, 'data', 'utf-8') // You can also add the encoding of the file in the format that will be created, (this is optional)
```

With `objects`:

```js
youfile.write.json(path, { data: true })
```

You can also define the amount of formatting spaces of the JSON file, default is 0.

```js
youfile.write.json(path, { data: true }, 4)
```

### dir

> If when creating the folder the directory does not exist it will be created automatically.

```js
youfile.write.dir(path)
```

## Read

Returns the contents of the file as an `fs.readFile` :

```js
youfile.read.file(path)
youfile.read.file(path, 'utf-8') // You can also add the encoding of the file in the format it will retranslate, (this is optional)
```

Returns the contents of the file in an `object`:

```js
youfile.read.json(path)
```

You can also read JSON files with comments:

```js
youfile.read.json5(path)
```

## Get

### sha256

Returns the sha256 of the file in a `string`.

```js
youfile.get.sha256(path)
```

### folders

Return an `array` with all folders that are in the same directory.

```js
youfile.get.folders(path)
```

### files

Return an `array` with all the files that are in the same directory.

```js
youfile.get.files(path)
```

### extFiles

Returns an `array` with all the files with a specified extension that are in the same directory

```js
youfile.get.extFiles(path, '.ext')
```

### allFolders

Returns an `array` with all folders contained in the directory

```js
youfile.get.allFolders(path)
```

### allFiles

Returns an `array` with all the files contained in the a directory.

```js
youfile.get.allFiles(path)
```

### allExtFiles

Returns an `array` with all the files with a specified extension contained in the directory

```js
youfile.get.allExtFiles(path, '.ext')
```

## Other functions

### exists

Returns a `boolean` if the file or directory exists

```js
youfile.exists(path)
```

### remove

Removes files and directories

```js
youfile.remove(path)
```

### removeExists

Remove files and directories if they exist

```js
youfile.removeExists(path)
```

### copy

Copy files and directories

```js
youfile.copy(path, dest)
```

### move

I move files or directories

```js
youfile.move(path, dest)
```
