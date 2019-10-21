# Realworld Backend

## ProjectStacks

 - Spring Framework + Spring Boot
 - R2DBC
 - Postgres
 - JUnit
 
 
## Run Postgres Locally

```shell script
docker pull postgres
docker volume pgdata
docker run -d -p 5432:5432 --name pgsql -it --rm -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password postgres
```

