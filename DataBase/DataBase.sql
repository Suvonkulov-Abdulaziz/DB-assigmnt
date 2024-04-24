CREATE TABLE Recipe (
    RecipeID INT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Instructions TEXT,
    Source VARCHAR(255)
    -- Add other attributes as needed
);