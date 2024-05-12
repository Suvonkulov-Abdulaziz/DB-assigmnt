CREATE TABLE "User" (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255)
);

CREATE TABLE SocialMediaAccount (
    AccountID INT PRIMARY KEY,
    UserID INT,
    Platform VARCHAR(50),
    AccountName VARCHAR(255),
    AccessToken VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES "User"(UserID)
);

CREATE TABLE Recipe (
    RecipeID INT PRIMARY KEY,
    Title VARCHAR(255),
    Description TEXT,
    Instructions TEXT
);

CREATE TABLE Ingredient (
    IngredientID INT PRIMARY KEY,
    Name VARCHAR(255),
    Quantity DECIMAL(10, 2),
    Unit VARCHAR(50)
);

-- Table: RecipeIngredient
CREATE TABLE RecipeIngredient (
    RecipeID INT,
    IngredientID INT,
    Quantity DECIMAL(10, 2),
    FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredient(IngredientID),
    PRIMARY KEY (RecipeID, IngredientID)
);

-- Table: Collection
CREATE TABLE Collection (
    CollectionID INT PRIMARY KEY,
    UserID INT,
    Title VARCHAR(255),
    Description TEXT,
    FOREIGN KEY (UserID) REFERENCES "User"(UserID)
);

-- Table: CollectionRecipe
CREATE TABLE CollectionRecipe (
    CollectionID INT,
    RecipeID INT,
    FOREIGN KEY (CollectionID) REFERENCES Collection(CollectionID),
    FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
    PRIMARY KEY (CollectionID, RecipeID)
);

-- Table: Tag
CREATE TABLE Tag (
    TagID INT PRIMARY KEY,
    Name VARCHAR(255),
    Description TEXT
);

-- Table: RecipeTag
CREATE TABLE RecipeTag (
    RecipeID INT,
    TagID INT,
    FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
    FOREIGN KEY (TagID) REFERENCES Tag(TagID),
    PRIMARY KEY (RecipeID, TagID)
);

-- Table: Note
CREATE TABLE Note (
    NoteID INT PRIMARY KEY,
    UserID INT,
    RecipeID INT,
    Content TEXT,
    FOREIGN KEY (UserID) REFERENCES "User"(UserID),
    FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID)
);

INSERT INTO Recipe (RecipeID, Title, Description, Instructions, Source) VALUES
    (1, 'Chicken Alfredo', 'Creamy chicken alfredo pasta', '1. Cook pasta according to package instructions. 2. In a large skillet, cook chicken until no longer pink. 3. Add Alfredo sauce and cooked pasta to the skillet. 4. Serve hot.', 'Food Network'),
    (2, 'Chocolate Cake', 'Moist and delicious chocolate cake', '1. Preheat oven to 350°F. 2. Mix flour, sugar, and cocoa powder in a bowl. 3. Add eggs, milk, and oil. 4. Pour into greased cake pan. 5. Bake for 30 minutes.', 'Allrecipes');



