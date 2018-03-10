## Proyecto IQ Administración Web

El proyecto es un sitio web que contiene los perfiles para administrar un equipo de generación de oxígeno suplementario.

## Requerimientos
Requiere installar NodeJs.

Herramientas sugeridas:
```
1: Web browser (Chrome)
2: Editor Texto (SublimeText)
```
## Instalación
- Descargar NodeJs del sitio web: https://nodejs.org/en/
- Descargar SublimeText del sitio web: https://www.sublimetext.com

## Manejador de paquetes node
El manejador se llama npm y viene con la instalación de Node. En el sitio web se encuentran todos los paquetes https://www.npmjs.com

## Correr el Proyecto

Para correr el proyecto debes usar la terminal e ingresar a la carpeta contenedora del proyecto y ejecutar la linea:
```
$ npm install
```
Con esto descargaras los módulos npm para ejecutar el proyecto.

Ahora debes installar gulp de forma global, para eso como root (sudo) ejecutar el comando:
```
$ npm i -g gulp 
```
Ahora corres gulp para generar los archivos automatizados:
```
$ gulp
```
Inicia el proyecto con el comando
```
$ npm start
```
El el browser puedes ver el proyecto en :
http://localhost:8080/

Si realizas cambios en el scss debe detener el proceso y ejecutar la linea
```
$ gulp
```
Luego cancelar el proceso y levantar el servicio con el comando 
```
$ npm start
```
## Ramas
Existen dos ramas del proyecto:
```
1: Rama Master (Rama con el perfil doctor)
2: Rama 2 (Rama con el perfil doctor, y perfiles propuestos admin y tabla dinámica)
```

Se recomienda usar la rama2, queda a libertar del desarrollador generar nuevas ramas o fusiones.
