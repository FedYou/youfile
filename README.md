# YouFile

<!-- Administra tus archivos y carpetas de forma rápida y simple usando a las librerías `fs-extra`, `mkdir` y `json5` -->

Manage your files and folders quickly and easily using the `fs-extra`, `mkdir` and `json5` libraries.

<!-- > [!NOTE]
> Al hacer `set`, `copy`, `move` si el directorio no existe se completará -->

> [!NOTE]
> When doing `set`, `copy`, `move` if the directory does not exist it will be completed

## Use

### Module

```js
import yfile from "youfile";
```

### Commonjs

```js
const yfile = require("youfile");
```

## yfile.set

### Create File

```js
yfile.set(src, data);
```

<!-- > [!TIP]
> Si está trabando con `objetos` puedes poner directamente el `objeto` como dato del archivo `json` -->

> [!TIP]
> If you are working with `objects` you can put the `object` directly as data in the `json` file.

### Create Folder

<!-- Para crear una carpeta solo debes poner `false` en los datos -->

To create a folder you just have to put `false` in the data

```js
yfile.set(src, false);
```

## yfile.get

```js
yfile.get(src);
```

<!-- > [!NOTE]
> Al obtener los datos de un archivo con la extensión `.json` ya será un objeto -->

> [!NOTE]
> When obtaining data from a file with the extension `.json` it will already be an object

## yfile.remove

<!-- Elimina archivos y directorios -->

Deletes files and directories

```js
yfile.remove(src);
```

## yfile.copy

<!-- Copia archivos y directorios -->

Copy files and directories

```js
yfile.copy(src, dest);
```

## yfile.move

<!-- Mueve archivos y directorios -->

Move files and directories

```js
yfile.move(src, dest);
```
