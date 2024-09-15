const recipeResultDiv = document.getElementById('recipeResultDiv')



const searchButton = () => {
    const inputSearch = document.getElementById('input-search').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`)
    .then(res => res.json())
    .then(data => {
        const recipes = data.meals
        console.log(recipes);
        if (recipes) {
            recipes.forEach(recipe => {
                const recipeDiv = document.createElement('div'); // Create a new div
                recipeDiv.innerHTML = `
                    <h3>${recipe.strMeal}</h3>
                    <img src=${recipe.strMealThumb} width = "100%">
                    <p>${recipe.strInstructions}</p>
                `;
                recipeResultDiv.appendChild(recipeDiv); 
            });
            document.getElementById('input-search').value = ' '
        }
        
        else{
            recipeResultDiv.innerHTML = '<p>no recipe found</p>'

        }

    })
    
}

const buttonclick =document.getElementById('buttonclick').addEventListener('click', searchButton);
