# power-trip-web

## Building the client:

1. Make sure you have `node` v18 or higher installed and in your $PATH.
2. Run `npm install` from the repo root to install dependencies.
3. Run `npm run dev` to build & run the site locally with hot-reloading.

## Building the db

1. Run `docker build -t powertripdb .` from the root of `db` to build the Docker image from the Dockerfile.
2. Run `docker run --name powertripdb -p 5432:5432 powertripdb` to start a Docker container with the database.

## Connecting to the db

- If you have psql: Connect to the db using `psql <DATABASE_NAME> -h localhost -U <POSTGRES_USER>`
- Or if you want to connect to the docker instance directly: `docker exec -it <INSTANCE#> psql -U <POSTGRES_USER> <DATABASE_NAME>`
- If you want to connect from Next.js: `postgresql://myuser:mypassword@localhost:5432/mydb`
