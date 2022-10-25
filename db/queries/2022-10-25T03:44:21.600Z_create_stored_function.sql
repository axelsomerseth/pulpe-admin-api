-- Create the stored function
CREATE OR REPLACE FUNCTION add(a integer, b integer) RETURNS integer 
AS $$
	BEGIN
		RETURN a + b;
	END;
$$ 
LANGUAGE plpgsql;

-- Calling the stored function
SELECT * FROM add(3, 5);