-- Revert amap:function from pg

BEGIN;

-- DROP FUNCTION add_farmer(json,integer ARRAY);

COMMIT;
