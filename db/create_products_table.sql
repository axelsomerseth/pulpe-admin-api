CREATE TABLE IF NOT EXISTS products (
	id SERIAL PRIMARY KEY,
	name varchar(100) NOT NULL,
	description varchar(255),
	categoty_id integer NOT NULL REFERENCES categories (id),
	price decimal NOT NULL,
	stock integer NOT NULL,
	created_at timestamptz,
	updated_at timestamptz,
	deleted_at timestamptz
)