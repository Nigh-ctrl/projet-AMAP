-- Revert amap:function from pg

BEGIN;

DROP FUNCTION add_farmer(json,integer ARRAY);
DROP FUNCTION update_farmer(json,integer ARRAY);

COMMIT;
