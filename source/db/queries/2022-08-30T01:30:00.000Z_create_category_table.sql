CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	name varchar(60) NOT NULL,
	description varchar(255),
	created_at timestamptz,
	updated_at timestamptz,
	deleted_at timestamptz
)