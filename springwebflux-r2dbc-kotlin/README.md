# Realworld Backend

## ProjectStacks

 - Spring Framework + Spring Boot
 - Reactive MongoDB
 - MongoDB
 - JUnit
 
 
 
## Project Spec
[Backend Api Spec](https://github.com/gothinkster/realworld/tree/master/api) 
 
## Run Postgres Locally

```shell script
docker pull mongo
docker run --name mongodb_server -v ${local_db_path}/db:/data/db -d -p 27017:27017 mongo --auth
docker exec -it mongodb_server bash
```

## admin account
```shell script
use admin

db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ]
})
```

## custom database
```shell script
mongo -u 'admin' -p 'admin' –authenticationDatabase 'admin'

use realworld
db.createUser({
  user: 'realworld_user',
  pwd: 'password',
  roles: ['dbAdmin', 'readWrite'] 
})
```
