SELECT
	id,
	name,
	description,
	price,
	stock,
	categoty_id,
	created_at,
	updated_at,
	deleted_at
FROM
	products
ORDER BY
	id ASC;