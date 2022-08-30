CREATE TABLE IF NOT EXISTS products (
	id integer CONSTRAINT product_id PRIMARY KEY,
	name varchar(100) NOT NULL,
	description varchar(255),
	price decimal NOT NULL,
	stock integer NOT NULL
)