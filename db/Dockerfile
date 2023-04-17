FROM postgres:14.7-alpine

ENV POSTGRES_DB=powertripdb
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

# Copy the SQL file to initialize the database
COPY init.sql /docker-entrypoint-initdb.d/
