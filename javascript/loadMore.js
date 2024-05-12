let recipeData = []; // Global variable to store fetched recipe data
let recipeIndex = 0; // Index to track the current position in the recipe list

async function fetchData() {
    const options = {
        method: 'GET',
        url: 'https://all-in-one-recipe-api.p.rapidapi.com/random',
        headers: {
            'X-RapidAPI-Key': 'f3250fdfd4msh022a441e8f8056ep1961efjsnbd16fe3c1bcb',
            'X-RapidAPI-Host': 'all-in-one-recipe-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error(error);
        return null; // Return null if there's an error
    }
}

async function displayRecipes() {
    const recipeListElement = document.getElementById('recipeList');
    const recipesToShow = recipeData.slice(recipeIndex, recipeIndex + 8); // Show 8 recipes at a time

    recipesToShow.forEach(recipe => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mb-4');
        colDiv.innerHTML = `
            <figure class="my-3 my-md-4 tstbite-card">
                <a href="recipe-sidebar.html" class="tstbite-animation stretched-link rounded-6">
                    <img src="${recipe.image}" class="w-100" alt="${recipe.title}">
                </a>
                <figcaption class="mt-2">
                    <a href="recipe-sidebar.html" class="text-black d-block mt-1 font-weight-semibold big">${recipe.title}</a>
                </figcaption>
            </figure>
        `;
        recipeListElement.appendChild(colDiv);
    });

    recipeIndex += 8; // Increment index for the next set of recipes
}

async function loadMoreRecipes() {
    await fetchMoreRecipes();
    displayRecipes();
}

async function fetchMoreRecipes() {
    const moreRecipes = await fetchData();
    if (moreRecipes && moreRecipes.length > 0) {
        recipeData = [...recipeData, ...moreRecipes]; // Append new recipes to the existing list
    }
}

async function initialize() {
    recipeData = await fetchData();
    if (recipeData && recipeData.length > 0) {
        displayRecipes();
    } else {
        const recipeNameElement = document.getElementById('recipeName');
        recipeNameElement.textContent = 'Error fetching recipes';
    }
}

initialize();

document.getElementById('loadMoreBtn').addEventListener('click', loadMoreRecipes);
