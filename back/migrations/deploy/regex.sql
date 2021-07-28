-- Deploy amap:regex to pg

BEGIN;

--Create a regex for email validation
CREATE DOMAIN emailtype AS VARCHAR(50) CHECK(VALUE ~ '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');

ALTER TABLE admin
    ALTER COLUMN email TYPE emailtype;

COMMIT;
