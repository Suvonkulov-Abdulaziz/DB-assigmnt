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
    Instructions TEXT,
    Source VARCHAR(255)
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
    (2, 'Chocolate Cake', 'Moist and delicious chocolate cake', '1. Preheat oven to 350°F. 2. Mix flour, sugar, and cocoa powder in a bowl. 3. Add eggs, milk, and oil. 4. Pour into greased cake pan. 5. Bake for 30 minutes.', 'Allrecipes'),
    (3, 'Uzbel Plov', 'null', 'null' , 'https://uzbekistan.travel/storage/app/uploads/public/5e5/f6f/95e/thumb_187_600_480_0_0_auto.png'),
    (4,'Chicken Katsu', 'null', 'null', 'https://www.allrecipes.com/thmb/OgvuciU0zIZ85IIpNESMBrkTw5Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2322570-Chicken-Katsu-Photo-by-Snacking-in-the-Kitchen-650x465-9d37c8112e294d87ae5400188346d9d7.jpg'),
    (5, 'Sandys Chicken Saltimbocca','null', 'null', 'https://www.allrecipes.com/thmb/R68xmC9E79IUahoPB-zmFmZwGXU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-1c8f40da9b0c488f8e52944c725ceb4e.jpg'),
    (6, 'Chicken Marsala', 'null', 'null', 'https://www.allrecipes.com/thmb/Xol_WbZvlzExJGqeeAcr_fxb6HA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-Marsala-2000-e7ceaf7f8d79422084f54260530638bb.jpeg'),
    (7, 'Quick and Easy Chicken Piquant', 'null', 'null', 'https://www.allrecipes.com/thmb/S-vtd5BhI2M0ZHloZMcX-ZQ9fv0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5031585-2000-b231f5b1bf4c41e9a32ef2152d61d6fe.jpg'),
    (8, 'Crunchy French Onion Chicken', 'null', 'null', 'https://www.allrecipes.com/thmb/V6TLkgdIEReYFAAlLLb39pNjIAA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1681349-Crunchy-French-Onion-Chicken-Photo-by-bd.weld_-2000-0a52b00481f844fd8d9a58e97d607307.jpg'),
    (9, 'Sicilian Olive Chicken', 'null', 'null', 'https://www.allrecipes.com/thmb/RqL3DZF5IsTl__9rvUeiiRGvVMo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4512542-a08f324e467d45c3b681d840473be990.jpg'),
    (10, 'Spicy Garlic Lime Chicken', 'null', 'null', 'https://www.allrecipes.com/thmb/eCYmHYdAn7Wer0jJ1Kkb_kLWPpQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-1-2000-616716e26cab4971a02dc26fdf878ca4.jpg'),
    (11, 'Tender Italian Baked Chicken', 'null', 'null', 'https://www.allrecipes.com/thmb/Z7mAQoIkM-woNhw_vPV_Mx15Sy4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tender-Italian-Baked-Chicken--ecbae56176694a8aae954768cfa8dd91.jpeg'),
    (12, 'Keto Open-Faced Chicken Cordon Bleu', 'null', 'null', 'https://www.allrecipes.com/thmb/I8JroLKYVBmokbIOmKOZGdheSv8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-1-2-2000-dab033200914456db17f1124adbe775f.jpg'),
    (13, 'Garlic Wine Chicken', 'null', 'null', 'https://www.allrecipes.com/thmb/JZ5WhyjJBG86dAhBGm3a3Eswp14=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/975357-0bf86c34da944936a7c977e601fb7e3b.jpg'),
    (14, 'Chef Johns Chicken French', 'null', 'null', 'https://www.allrecipes.com/thmb/9Uo4AqTUJoHSCpEnf294bUlE71g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2026862-80f5249ba3764c7b8281e9ebaecf4c77.jpg'),
    (15, 'Chicken Milanese', 'null', 'null', 'https://www.allrecipes.com/thmb/HRXldRMXPPAHeOrV0n4Ar5fBRJs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-Milanese-fc93e3b829b7402e815c477402f4de8a.jpg'),
    (16, 'Dukkah Chicken Cutlets and Eggs', 'null', 'null', 'https://www.allrecipes.com/thmb/-9-Kl0sh2m6m-PFYIVzLg1J6QUY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-6-72b5558b42424c0a96a2737434b89351.jpeg'),
    (17, 'Smoked Mozzarella Skillet Chicken', 'null', 'null', 'https://www.allrecipes.com/thmb/e-uYqMZkfgZCc2V3dHA3w-GxK9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8028733-2000-32f4fbc070ce4a788689b6aa81cf744c.jpg'),
    (18, 'Crispy Baked Chicken with Giardiniera', 'null', 'null', 'https://www.allrecipes.com/thmb/uEZht0jIi7TQv6n1a4Gmrq0pG7s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9274153_crispy-baked-chicken-with-giardiniera_france-c-2000-77b15a5d0bbd4d8d92fd343acd035aba.jpg'),
    (19, 'Crispy Panko Chicken Breasts', 'null', 'null', 'https://www.allrecipes.com/thmb/EL6_d-LnpeGV44uFLZW1beYRxk4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Quick-Crispy-Parmesan-Chicken-Breasts-af596b7cd3924076a5f73744fae93287.jpg'),
    (20, 'More Like This', 'null', 'null', 'https://www.allrecipes.com/thmb/pU01e_zx4df9at_s9Pu4hh2mK0s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7980195_make-ahead-freezer-chicken-parmesan_fabeveryday-6ceff62a8d4a43769577adcd9ca7a913.jpg');



