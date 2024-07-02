# YouFile

Gestiona tus archivos y carpetas de forma rápida y sencilla.

> Al hacer `write`, `copy`, `move` si el directorio no existe se creara automaticamente.

## Instalacion

### Module

```js
import yfile from "youfile";
```

### Commonjs

```js
const yfile = require("youfile");
```

## Creación de archivos

Puedes crear archivos con `objects` como tambien con `strings`

Con `strings`:

```js
yfile.write.file(path, "data");
```

Con `objects`:

```js
yfile.write.json(path, { data: true });
```

Puedes tambien definir la cantidad de espacios de formateo del archivo json, por defecto es 0.

```js
yfile.write.json(path, { data: true }, 4);
```

## Creación de carpetas

Si al crear la carpeta el directorio no existe se creara automaticamente.

```js
yfile.write.dir(path);
```

## Lectura de archivos y directorios

### Archivos

Retorna el contenido del archivo en un `string`:

```js
yfile.read.file(path);
```

Retorna el contenido del archivo en un `objeto`:

```js
yfile.read.json(path);
```

Tambien puedes leer archivos con comentarios:

```js
yfile.read.json5(path);
```

### Directorios

Retorna un `array` con todas las carpetas que estan en el mismo directorio:

```js
yfile.read.dir.getFolders(path);
```

Retorna un `array` con todos los archivos que estan en el mismo directorio:

```js
yfile.read.dir.getFiles(path);
```

Retorna un `array` con todos los archivos con una extension especifica que estan en el mismo directorio:

```js
yfile.read.dir.getExtnameFiles(path, ".ext");
```

Retorna un `array` con todas las carpetas que contiene el directorio:

```js
yfile.read.dir.getAllFolders(path);
```

Retorna un `array` con todos los archivos que contiene el directorio:

```js
yfile.read.dir.getAllFiles(path);
```

Retorna un `array` con todos los archivos con una extension especifica que contiene el directorio:

```js
yfile.read.dir.getAllExtnameFiles(path, ".ext");
```

## Elimina archivos y directorios

```js
yfile.remove(path);
```

## Copia archivos y directorios

```js
yfile.copy(path, dest);
```

## Mueve archivos y directorios

```js
yfile.move(path, dest);
```
