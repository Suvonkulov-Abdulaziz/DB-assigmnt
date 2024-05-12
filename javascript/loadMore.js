let recipeIndex = 0; // Initialize recipe index

async function fetchAndDisplayRecipes() {
    try {
        const response = await fetch('http://localhost:3000/recipe');
        const recipeData = await response.json();
        displayRecipes(recipeData);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipeListElement = document.getElementById('recipeList');

    // Show 4 recipes at a time, starting from the current recipe index
    const recipesToShow = recipes.slice(recipeIndex, recipeIndex + 4);

    recipesToShow.forEach(recipe => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mb-4');
        colDiv.innerHTML = `
            <figure class="my-3 my-md-4 tstbite-card">
                <a href="recipe-sidebar.html" class="tstbite-animation stretched-link rounded-6">
                    <img src="${recipe.source}" style="width: 250px; height: 250px;" alt="${recipe.title}">
                </a>
                <figcaption class="mt-2">
                    <a href="recipe-sidebar.html" class="text-black d-block mt-1 font-weight-semibold big">${recipe.title}</a>
                </figcaption>
            </figure>
        `;
        recipeListElement.appendChild(colDiv);
    });

    recipeIndex += 4; // Increment index for the next set of recipes

    // Hide the "Load More" button if all recipes have been loaded
    if (recipeIndex >= recipes.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', fetchAndDisplayRecipes);

// Initial load of recipes
fetchAndDisplayRecipes();
