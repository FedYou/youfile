# YouFile

Gestiona tus archivos y carpetas de forma rápida y sencilla.

> Al hacer `write`, `copy`, `move` si el directorio no existe se creara automaticamente.

## Instalacion

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

Puedes crear archivos con `objects` como tambien con `strings`

Con `strings`:

```js
youfile.write.file(path, "data");
```

Con `objects`:

```js
youfile.write.json(path, { data: true });
```

Puedes tambien definir la cantidad de espacios de formateo del archivo json, por defecto es 0.

```js
youfile.write.json(path, { data: true }, 4);
```

### dir

> Si al crear la carpeta el directorio no existe se creara automaticamente.

```js
youfile.write.dir(path);
```

## Read

Retorna el contenido del archivo en un `string`:

```js
youfile.read.file(path);
```

Retorna el contenido del archivo en un `objeto`:

```js
youfile.read.json(path);
```

Tambien puedes leer archivos con comentarios:

```js
youfile.read.json5(path);
```

## Get

### sha256

Retorna un `promise` con en sha256 del archivo en un `string`

```js
youfile.get.sha256(path);
```

### folders

Retorna un `array` con todas las carpetas que estan en el mismo directorio

```js
youfile.get.folders(path);
```

### files

Retorna un `array` con todos los archivos que estan en el mismo directorio

```js
youfile.get.files(path);
```

### allFolders

Retorna un `array` con todas las carpetas que contiene el directorio

```js
youfile.get.allFolders(path);
```

### allFiles

Retorna un `array` con todos los archivos que contiene el directorio

```js
youfile.get.allFiles(path);
```

## Search

### extnameFiles

Retorna un `array` con todos los archivos con una extension especifica que estan en el mismo directorio

```js
youfile.search.extnameFiles(path, ".ext");
```

### nameFiles

Retorna un `array` con todos los archivos con un nombre especifico que estan en el mismo directorio

```js
youfile.search.nameFiles(path, "text.txt");
```

### allExtnameFiles

Retorna un `array` con todos los archivos con una extension especifica que contiene el directorio

```js
youfile.search.allExtnameFiles(path, ".ext");
```

### allNameFiles

Retorna un `array` con todos los archivos con un nombre especifico que contiene el directorio

```js
youfile.search.allNameFiles(path, "text.txt");
```

## Otras funciones

### exists

Retorna un `boolean` si el archivo o directorio existe

```js
youfile.exists(path);
```

### remove

Elimina archivos y directorios

```js
youfile.remove(path);
```

### removeExists

Elimina archivos y directorios si existen

```js
youfile.removeExists(path);
```

### copy

Copia archivos y directorios

```js
youfile.copy(path, dest);
```

### move

Muevo archivos o directorios

```js
youfile.move(path, dest);
```
