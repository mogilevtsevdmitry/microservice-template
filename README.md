# NestJS Microservice

## Start Template

### Technologies

<table width="100%">
    <tr>  
      <td align="center" valign="middle" width="17%">
      <a href="https://www.postgresql.org/">
      <img height="50" alt="PostgresSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"/>
      </a>
      <br />
      PostgresSQL
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://typeorm.io/">
      <img height="50" alt="TypeORM" src="https://www.zoneofit.com/wp-content/uploads/2021/06/type-orm.png"/>
      </a>
      <br />
      TypeORM
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.docker.com/">
      <img height="50" alt="Docker" src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"/>
      </a>
      <br />
      Docker
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.npmjs.com/package/@golevelup/nestjs-rabbitmq">
      <img height="50" alt="Docker" src="https://www.nastel.com/wp-content/uploads/2022/05/rabbitmq.png"/>
      </a>
      <br />
      RabbitMQ
    </td>
    </tr>
</table>

### Initial settings
- create <b>.env</b> file. Example inside <a href="https://github.com/mogilevtsevdmitry/microservice-template/blob/master/.env.example">.env.example</a>
- create Postgres db and set url to the .env or run <a href="https://github.com/mogilevtsevdmitry/microservice-template/blob/master/docker/postgres/docker-compose.yml">docker-compose</a> file with postgres
- install dependencies
```sh
yarn install
```
- run migrations
```sh
yarn migration:run
```
  
### Start app
```sh
yarn start

# develop
yarn start:dev

# production
yarn start:prod
```

### Happy Coding 🧑‍💻