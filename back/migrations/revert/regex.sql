-- Revert amap:regex from pg

BEGIN;

ALTER TABLE admin
    ALTER COLUMN email TYPE VARCHAR(50);

DROP DOMAIN emailtype;

COMMIT;
