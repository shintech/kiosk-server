DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE employees (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  clocked_in BOOLEAN default false
);

INSERT INTO employees ( first_name, last_name )
VALUES ( 'Kill', 'Bill' );
