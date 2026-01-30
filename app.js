// ===== STATE MANAGEMENT =====
let currentFilter = 'all';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentRecipe = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderRecipes(recipesData);
    setupEventListeners();
    updateFavoritesDisplay();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Modal close
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('recipeModal');
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Favorite button in modal
    const favoriteBtnModal = document.getElementById('favoriteBtnModal');
    favoriteBtnModal.addEventListener('click', toggleFavorite);
}

// ===== NAVIGATION =====
function handleNavigation(e) {
    e.preventDefault();
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
    
    const target = e.target.getAttribute('href').substring(1);
    
    // Hide all sections
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.querySelector('.recipes-section').style.display = 'none';
    document.querySelector('.favorites-section').classList.remove('active');
    
    // Show appropriate section
    if (target === 'home') {
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('.filters').style.display = 'block';
        document.querySelector('.recipes-section').style.display = 'block';
    } else if (target === 'recipes') {
        document.querySelector('.filters').style.display = 'block';
        document.querySelector('.recipes-section').style.display = 'block';
    } else if (target === 'favorites') {
        document.querySelector('.favorites-section').classList.add('active');
        updateFavoritesDisplay();
    }
    
    // Scroll to section
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
}

function scrollToRecipes() {
    document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
}

// ===== RECIPE RENDERING =====
function renderRecipes(recipes) {
    const recipesGrid = document.getElementById('recipesGrid');
    
    if (recipes.length === 0) {
        recipesGrid.innerHTML = '<p class="empty-message">No recipes found. Try adjusting your filters or search.</p>';
        return;
    }
    
    recipesGrid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
    
    // Add click listeners to recipe cards
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = parseInt(card.dataset.id);
            openRecipeModal(recipeId);
        });
    });
}

function createRecipeCard(recipe) {
    const isFavorite = favorites.includes(recipe.id);
    
    return `
        <div class="recipe-card fade-in" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta-info">
                    <span>⏱️ ${recipe.time}</span>
                    <span>🍽️ ${recipe.servings}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// ===== FILTERING =====
function handleFilterClick(e) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.category;
    filterRecipes();
}

function filterRecipes() {
    let filteredRecipes = recipesData;
    
    if (currentFilter !== 'all') {
        filteredRecipes = recipesData.filter(recipe => {
            return recipe.category === currentFilter || recipe.tags.includes(currentFilter);
        });
    }
    
    renderRecipes(filteredRecipes);
}

// ===== SEARCH =====
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filterRecipes();
        return;
    }
    
    const searchResults = recipesData.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchTerm) ||
               recipe.description.toLowerCase().includes(searchTerm) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
               recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
    });
    
    renderRecipes(searchResults);
}

// ===== MODAL =====
function openRecipeModal(recipeId) {
    const recipe = recipesData.find(r => r.id === recipeId);
    if (!recipe) return;
    
    currentRecipe = recipe;
    const modal = document.getElementById('recipeModal');
    
    // Populate modal content
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalImage').alt = recipe.title;
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalServings').textContent = recipe.servings;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    
    // Ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = recipe.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join('');
    
    // Instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = recipe.instructions
        .map((instruction, index) => `
            <div class="step">
                <span class="step-number">${index + 1}</span>
                <span class="step-text">${instruction}</span>
            </div>
        `)
        .join('');
    
    // Nutrition
    const nutritionDiv = document.getElementById('modalNutrition');
    nutritionDiv.innerHTML = Object.entries(recipe.nutrition)
        .map(([key, value]) => `
            <div class="nutrition-item">
                <span class="nutrition-value">${value}</span>
                <span class="nutrition-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </div>
        `)
        .join('');
    
    // Update favorite button
    updateFavoriteButton();
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentRecipe = null;
}

// ===== FAVORITES =====
function toggleFavorite() {
    if (!currentRecipe) return;
    
    const index = favorites.indexOf(currentRecipe.id);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentRecipe.id);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton();
    updateFavoritesDisplay();
}

function updateFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteBtnModal');
    
    if (!currentRecipe) return;
    
    const isFavorite = favorites.includes(currentRecipe.id);
    
    if (isFavorite) {
        favoriteBtn.classList.add('active');
        favoriteBtn.innerHTML = '<span class="heart">❤️</span> Remove from Favorites';
    } else {
        favoriteBtn.classList.remove('active');
        favoriteBtn.innerHTML = '<span class="heart">♡</span> Add to Favorites';
    }
}

function updateFavoritesDisplay() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-message">No favorites yet. Start adding your favorite recipes!</p>';
        return;
    }
    
    const favoriteRecipes = recipesData.filter(recipe => favorites.includes(recipe.id));
    favoritesGrid.innerHTML = favoriteRecipes.map(recipe => createRecipeCard(recipe)).join('');
    
    // Add click listeners to favorite recipe cards
    document.querySelectorAll('#favoritesGrid .recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = parseInt(card.dataset.id);
            openRecipeModal(recipeId);
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions available globally
window.scrollToRecipes = scrollToRecipes;