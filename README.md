## Descripción

Proyecto base de una API en Nodejs y MariaDB usando serverless y el plugin serverless-offline para desarrollo en local

## Prerrequisitos

- docker
- docker-compose

## Configuración

El proyecto trae un archivo de ejemplo .env.example para mostrar todas las variables de configuración disponibles, en base a este archivo se debe crear un archivo .env que será el que se use para crear los contenedores y para configurar el framework serverless, entre estas variables de configuración están las versiones de NodeJS y de MariaDB, la contraseña del usuario root para la DB, el usuario y contraseña de MariaDB para el desarrollo y el nombre de la base de datosa usar en el proyecto, también la configuración de puertos para poder accceder al proyecto desde el navegador y a la BD desde el cliente que usemos desde el host, esto para evitar conflictos con otros posibles servicios que tengamos en el host, las variables de configuración de AWS se irán agregando junto con la configuración de GitHub Actions para el despliegue automático según se avance el proyecto.

## Instalación rápida

```bash
$ cp .env.example .env
$ cd docker
$ docker-compose --env-file ../.env up
```