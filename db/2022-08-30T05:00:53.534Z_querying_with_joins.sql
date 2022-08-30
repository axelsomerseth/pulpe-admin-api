-- Show stock of alcoholic beverages
SELECT
	A.id,
	A.name,
	A.description,
	B.name AS "category",
	A.price,
	A.stock,
	'L ' || A.price * A.stock AS "total_money"
FROM
	products AS A
	INNER JOIN categories AS B ON a.categoty_id = b.id
WHERE
	categoty_id = 3