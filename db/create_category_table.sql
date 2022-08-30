CREATE TABLE IF NOT EXISTS categories (
	id integer CONSTRAINT categoty_id PRIMARY KEY,
	name varchar(60) NOT NULL,
	description varchar(255),
)