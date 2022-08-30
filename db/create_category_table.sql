CREATE TABLE IF NOT EXISTS categories (
	id integer CONSTRAINT categoty_id PRIMARY KEY,
	name varchar(50) NOT NULL,
	description varchar(50),
)