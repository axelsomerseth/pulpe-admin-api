-- Creating the stored procedure
CREATE PROCEDURE insert_category(catName text, catDescription text)
LANGUAGE SQL
AS $$
	INSERT INTO categories(name, description) VALUES (catName, catDescription);
$$;

-- Calling the stored procedure
CALL insert_category('Test name SP', 'Test from a stored procedure');