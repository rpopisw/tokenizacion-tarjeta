<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">TOKENIZACION TARJETA</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#Descripcion">Descripcion</a>
    </li>
    <li>
      <a href="#Arquitectura">Arquitectura</a>
    </li>
    <li>
      <a href="#started">Como empezar por el proyecto</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#ins">Instalacion</a></li>
      </ul>
    </li>
    <li><a href="#uso">Usos</a></li>
  </ol>
</details>

<a name="Descripcion"/></a>
<!-- Descripcion -->
## Descripcion
Las pasarelas de pagos guardan las tarjetas de crédito en una bóveda encriptada
(encriptación en reposo) para evitar que la información sensible se pueda filtrar o que
pueda ser interceptada en otro proceso del sistema.
El proceso de tokenización funciona enviando los datos de la tarjeta al tokenizador, este
valida y guarda la información en la BD encriptada y devuelve un ID (token) como llave
del registro el cual puede ser usado luego en los distintos procesos de culqi.
En el siguiente gráfico puedes ver donde se usa este API de tokenización en el proceso
de autorización de una tarjeta de crédito.

![Screen Shot 2022-10-11 at 11 10 05](https://user-images.githubusercontent.com/69777661/195144109-c5308543-35f4-491b-a8ff-db6e2b495655.png)

<a name="Arquitectura"/></a>
<!-- Arquitectura -->
## Arquitectura
![Screen Shot 2022-10-11 at 11 37 50](https://user-images.githubusercontent.com/69777661/195149933-6524d348-f6b2-4d2e-b7a3-6921931e3279.png)
<!-- GETTING STARTED -->

<a name="started"/></a>
## Estructura de carpetas

```
src
   |-- domain
   |   |-- adapters
   |   |   |-- commerce-service.interface.ts
   |   |-- entities
   |   |   |-- card.entity.ts
   |   |   |-- commerce.entity.ts
   |   |-- repositories
   |   |   |-- card.repository.interface.ts
   |   |   |-- commerce.repository.inteface.ts
   |-- infra
   |   |-- commons
   |   |   |-- data-sources
   |   |   |   |-- mongodb.datasource.ts
   |   |   |   |-- mysql2.datasource.ts
   |   |   |-- models-mongo
   |   |   |   |-- card.model.ts
   |   |   |-- validations
   |   |   |   |-- body.validation.ts
   |   |   |   |-- header.validation.ts
   |   |-- controller
   |   |   |-- card.ts
   |   |   |-- commerce.ts
   |   |-- data
   |   |   |-- .DS_Store
   |   |   |-- typeorm
   |   |   |   |-- migrations
   |   |   |   |   |-- 1665374965063-commerce.ts
   |   |   |   |-- repositories
   |   |   |   |   |-- card.repository.ts
   |   |   |   |   |-- commerce.repository.ts
   |   |   |   |-- typeorm.mysql.config.ts
   |   |-- services
   |   |   |-- commerce-service.ts
   |-- types
   |   |-- aws-lambda-types.ts
   |-- uses-cases
   |   |-- create-token-card
   |   |   |-- create-token-card.ts
   |   |   |-- create-tokken-card.spec.ts
   |   |-- get-card-by-tokken
   |   |   |-- get-card-by-tokken.spec.ts
   |   |   |-- get-card-by-tokken.ts
   |   |-- get-commerce-by-pk
   |   |   |-- get-commerce-by-pk.spec.ts
   |   |   |-- get-commerce-by-pk.ts
```
## Como empezar el proyecto
<a name="prerequisites"/></a>
### Prerequisitos
* node v14.17.3
* mysql
* mongodb
* serverless
  ```sh
  npm install -g serverless
  ```
<a name="ins"/></a>  
### Instalacion

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clonar el repo
   ```sh
   git clone git@github.com:rpopisw/tokenizacion-tarjeta.git
   ```
2. Instalar dependencias
   ```sh
   npm install
   ```
3. correr migraciones mysql ( antes crear la base de datos de culqui en mysql) 
   ```sh
   npm run migration:run
   ```

<!-- USAGE EXAMPLES -->
<a name="uso"/></a>  

## Uso

* Correr proyecto local
  ```sh
  npm run star:dev
  ```
![Screen Shot 2022-10-11 at 11 48 20](https://user-images.githubusercontent.com/69777661/195151946-de4091f0-8cc6-4669-b066-2db3ed935196.png)

* Correr test unitarios
  ```sh
  npm run test
  ```
  ![Screen Shot 2022-10-11 at 11 49 28](https://user-images.githubusercontent.com/69777661/195152180-1b28a09b-8c00-46f5-99f4-6c8474c1cc3e.png)

* Deploy aws
  ```sh
  npm run deploy:dev
  ```  
