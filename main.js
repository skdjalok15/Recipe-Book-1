import { recipes } from './recipes.mjs';

const recipesSection = document.querySelector("#recipes");

// Function to render a single recipe
function renderRecipe(recipe) {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <div class="rating" aria-label="Rating: ${recipe.rating} out of 5 stars">
            ${"⭐".repeat(Math.floor(recipe.rating)) + "☆".repeat(5 - Math.floor(recipe.rating))}
        </div>
        <p>${recipe.description}</p>
    `;
    recipesSection.appendChild(recipeCard);
}

// Render all recipes
recipes.forEach(renderRecipe);
