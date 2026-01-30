// Recipes Database
const recipesData = [
    {
        id: 1,
        title: "Classic Pancakes",
        description: "Fluffy, golden pancakes perfect for breakfast",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&h=300&fit=crop",
        time: "20 mins",
        servings: "4 servings",
        difficulty: "Easy",
        tags: ["breakfast", "vegetarian"],
        ingredients: [
            "2 cups all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1 teaspoon salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/4 cup melted butter",
            "1 teaspoon vanilla extract"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, beat eggs and then add milk, melted butter, and vanilla extract.",
            "Pour the wet ingredients into the dry ingredients and stir until just combined. Don't overmix - lumps are okay!",
            "Heat a non-stick pan or griddle over medium heat and lightly grease it.",
            "Pour 1/4 cup of batter for each pancake onto the pan.",
            "Cook until bubbles form on the surface and edges look set, about 2-3 minutes.",
            "Flip and cook for another 1-2 minutes until golden brown.",
            "Serve hot with maple syrup, butter, and fresh berries."
        ],
        nutrition: {
            calories: "320",
            protein: "8g",
            carbs: "45g",
            fat: "12g"
        }
    },
    {
        id: 2,
        title: "Spaghetti Carbonara",
        description: "Creamy Italian pasta with bacon and parmesan",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=300&fit=crop",
        time: "25 mins",
        servings: "4 servings",
        difficulty: "Medium",
        tags: ["dinner", "italian"],
        ingredients: [
            "1 pound spaghetti",
            "6 strips bacon, chopped",
            "4 large eggs",
            "1 cup grated Parmesan cheese",
            "3 cloves garlic, minced",
            "Salt and black pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, fry chopped bacon in a large skillet until crispy. Add garlic and cook for 1 minute.",
            "In a bowl, whisk together eggs and Parmesan cheese until well combined.",
            "Reserve 1 cup of pasta water, then drain the spaghetti.",
            "Remove skillet from heat and add the hot pasta to the bacon.",
            "Quickly pour in the egg mixture while tossing constantly to create a creamy sauce.",
            "Add pasta water a little at a time if the sauce is too thick.",
            "Season with salt and plenty of black pepper. Garnish with parsley and extra Parmesan."
        ],
        nutrition: {
            calories: "580",
            protein: "28g",
            carbs: "65g",
            fat: "22g"
        }
    },
    {
        id: 3,
        title: "Greek Salad",
        description: "Fresh and healthy Mediterranean salad",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=300&fit=crop",
        time: "15 mins",
        servings: "4 servings",
        difficulty: "Easy",
        tags: ["lunch", "vegetarian", "healthy"],
        ingredients: [
            "4 large tomatoes, cut into wedges",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "1 green bell pepper, chopped",
            "1 cup Kalamata olives",
            "200g feta cheese, cubed",
            "1/4 cup extra virgin olive oil",
            "2 tablespoons red wine vinegar",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Wash and prepare all the vegetables - cut tomatoes into wedges, slice cucumber, and chop bell pepper.",
            "Place all vegetables in a large salad bowl along with the olives.",
            "Add cubed feta cheese on top of the vegetables.",
            "In a small bowl, whisk together olive oil, red wine vinegar, and oregano.",
            "Drizzle the dressing over the salad.",
            "Season with salt and pepper to taste.",
            "Toss gently to combine all ingredients without breaking the feta too much.",
            "Let it sit for 5-10 minutes before serving to allow flavors to meld."
        ],
        nutrition: {
            calories: "280",
            protein: "9g",
            carbs: "15g",
            fat: "21g"
        }
    },
    {
        id: 4,
        title: "Chocolate Chip Cookies",
        description: "Chewy, gooey chocolate chip cookies",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop",
        time: "30 mins",
        servings: "24 cookies",
        difficulty: "Easy",
        tags: ["dessert", "vegetarian"],
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat your oven to 375°F (190°C).",
            "In a bowl, whisk together flour, baking soda, and salt. Set aside.",
            "In a large bowl, beat softened butter with both sugars until creamy and fluffy.",
            "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
            "Gradually add the flour mixture to the butter mixture, stirring until just combined.",
            "Fold in chocolate chips with a spatula.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets, spacing them 2 inches apart.",
            "Bake for 9-11 minutes or until golden brown around the edges.",
            "Cool on baking sheets for 2 minutes, then transfer to a wire rack to cool completely."
        ],
        nutrition: {
            calories: "185",
            protein: "2g",
            carbs: "24g",
            fat: "9g"
        }
    },
    {
        id: 5,
        title: "Chicken Stir Fry",
        description: "Quick and colorful Asian-inspired stir fry",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=300&fit=crop",
        time: "25 mins",
        servings: "4 servings",
        difficulty: "Medium",
        tags: ["dinner", "asian"],
        ingredients: [
            "1 pound chicken breast, cut into strips",
            "2 cups broccoli florets",
            "1 red bell pepper, sliced",
            "1 carrot, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "3 cloves garlic, minced",
            "1 tablespoon fresh ginger, grated",
            "2 tablespoons vegetable oil",
            "2 tablespoons cornstarch",
            "1/4 cup water"
        ],
        instructions: [
            "Toss chicken strips with 1 tablespoon cornstarch and let sit for 10 minutes.",
            "Heat vegetable oil in a large wok or skillet over high heat.",
            "Add chicken and stir-fry until cooked through, about 5-6 minutes. Remove and set aside.",
            "In the same pan, add garlic and ginger, stir-fry for 30 seconds.",
            "Add broccoli, bell pepper, and carrot. Stir-fry for 3-4 minutes until tender-crisp.",
            "Mix soy sauce, oyster sauce, sesame oil, remaining cornstarch, and water in a small bowl.",
            "Return chicken to the pan and add the sauce mixture.",
            "Stir everything together and cook for 2 minutes until sauce thickens.",
            "Serve hot over steamed rice or noodles."
        ],
        nutrition: {
            calories: "290",
            protein: "32g",
            carbs: "18g",
            fat: "10g"
        }
    },
    {
        id: 6,
        title: "Avocado Toast",
        description: "Simple and nutritious breakfast favorite",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&h=300&fit=crop",
        time: "10 mins",
        servings: "2 servings",
        difficulty: "Easy",
        tags: ["breakfast", "vegetarian", "healthy"],
        ingredients: [
            "2 ripe avocados",
            "4 slices whole grain bread",
            "2 tablespoons lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "2 eggs (optional)",
            "Cherry tomatoes for garnish",
            "Fresh cilantro or parsley"
        ],
        instructions: [
            "Toast the bread slices until golden and crispy.",
            "While bread is toasting, cut avocados in half and remove the pit.",
            "Scoop out the avocado flesh into a bowl and mash with a fork.",
            "Add lemon juice, salt, and pepper to the mashed avocado and mix well.",
            "If adding eggs, fry or poach them to your liking.",
            "Spread the avocado mixture generously on each toast.",
            "Top with egg if using, halved cherry tomatoes, and fresh herbs.",
            "Sprinkle with red pepper flakes for extra kick. Serve immediately."
        ],
        nutrition: {
            calories: "320",
            protein: "8g",
            carbs: "28g",
            fat: "21g"
        }
    },
    {
        id: 7,
        title: "Beef Tacos",
        description: "Flavorful Mexican-style tacos with seasoned beef",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&h=300&fit=crop",
        time: "30 mins",
        servings: "6 tacos",
        difficulty: "Easy",
        tags: ["lunch", "mexican"],
        ingredients: [
            "1 pound ground beef",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 tablespoons taco seasoning",
            "1/2 cup water",
            "6 taco shells or tortillas",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1 cup shredded cheese",
            "Sour cream and salsa for serving"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat.",
            "Add ground beef and cook, breaking it up with a spoon, until browned (about 5-7 minutes).",
            "Add diced onion and garlic, cook until onion is softened (3-4 minutes).",
            "Drain excess fat from the pan.",
            "Add taco seasoning and water, stir to combine.",
            "Simmer for 5 minutes until sauce thickens, stirring occasionally.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef, then top with lettuce, tomatoes, and cheese.",
            "Serve with sour cream and salsa on the side."
        ],
        nutrition: {
            calories: "380",
            protein: "24g",
            carbs: "28g",
            fat: "19g"
        }
    },
    {
        id: 8,
        title: "Vegetable Curry",
        description: "Aromatic Indian curry loaded with vegetables",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
        time: "40 mins",
        servings: "6 servings",
        difficulty: "Medium",
        tags: ["dinner", "vegetarian", "indian"],
        ingredients: [
            "2 cups mixed vegetables (potatoes, carrots, peas, cauliflower)",
            "1 can (14oz) coconut milk",
            "1 can (14oz) diced tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "1 tablespoon fresh ginger, grated",
            "2 tablespoons curry powder",
            "1 teaspoon cumin",
            "1 teaspoon turmeric",
            "2 tablespoons vegetable oil",
            "Salt to taste",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Heat oil in a large pot over medium heat.",
            "Add onion and cook until softened, about 5 minutes.",
            "Add garlic and ginger, cook for 1 minute until fragrant.",
            "Add curry powder, cumin, and turmeric. Toast spices for 1 minute.",
            "Add diced tomatoes and cook for 5 minutes, stirring occasionally.",
            "Add all vegetables and coconut milk. Stir to combine.",
            "Bring to a boil, then reduce heat and simmer for 20-25 minutes until vegetables are tender.",
            "Season with salt to taste.",
            "Garnish with fresh cilantro and serve with rice or naan bread."
        ],
        nutrition: {
            calories: "245",
            protein: "5g",
            carbs: "22g",
            fat: "17g"
        }
    },
    {
        id: 9,
        title: "Caesar Salad",
        description: "Classic Caesar salad with homemade dressing",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=300&fit=crop",
        time: "20 mins",
        servings: "4 servings",
        difficulty: "Easy",
        tags: ["lunch", "salad"],
        ingredients: [
            "1 large romaine lettuce, chopped",
            "1 cup croutons",
            "1/2 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "1/4 cup mayonnaise",
            "2 tablespoons lemon juice",
            "1 teaspoon Dijon mustard",
            "2 tablespoons olive oil",
            "2 anchovy fillets (optional)",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "Wash and thoroughly dry the romaine lettuce, then chop into bite-sized pieces.",
            "For the dressing: blend garlic, mayonnaise, lemon juice, Dijon mustard, anchovies (if using), and olive oil.",
            "Season dressing with salt and pepper to taste.",
            "Place chopped lettuce in a large bowl.",
            "Add about half of the dressing and toss to coat evenly.",
            "Add more dressing if needed - the lettuce should be well coated but not soggy.",
            "Add croutons and most of the Parmesan cheese, toss again.",
            "Top with remaining Parmesan and extra black pepper. Serve immediately."
        ],
        nutrition: {
            calories: "310",
            protein: "8g",
            carbs: "12g",
            fat: "26g"
        }
    },
    {
        id: 10,
        title: "Banana Bread",
        description: "Moist and sweet banana bread",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&h=300&fit=crop",
        time: "1 hour 15 mins",
        servings: "10 slices",
        difficulty: "Easy",
        tags: ["dessert", "vegetarian"],
        ingredients: [
            "3 ripe bananas, mashed",
            "1/3 cup melted butter",
            "3/4 cup sugar",
            "1 egg, beaten",
            "1 teaspoon vanilla extract",
            "1 teaspoon baking soda",
            "Pinch of salt",
            "1 1/2 cups all-purpose flour",
            "1/2 cup chopped walnuts (optional)"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease a 9x5 inch loaf pan.",
            "In a large bowl, mash the ripe bananas with a fork until smooth.",
            "Stir in melted butter until well combined.",
            "Mix in sugar, beaten egg, and vanilla extract.",
            "Sprinkle baking soda and salt over the mixture and stir in.",
            "Add flour and stir until just combined - don't overmix!",
            "Fold in walnuts if using.",
            "Pour batter into prepared loaf pan and smooth the top.",
            "Bake for 60-65 minutes until a toothpick inserted in center comes out clean.",
            "Cool in pan for 10 minutes, then turn out onto a wire rack to cool completely."
        ],
        nutrition: {
            calories: "235",
            protein: "3g",
            carbs: "38g",
            fat: "8g"
        }
    },
    {
        id: 11,
        title: "Margherita Pizza",
        description: "Classic Italian pizza with fresh basil and mozzarella",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop",
        time: "2 hours",
        servings: "4 servings",
        difficulty: "Medium",
        tags: ["dinner", "italian", "vegetarian"],
        ingredients: [
            "2 1/4 teaspoons active dry yeast",
            "1 1/3 cups warm water",
            "3 1/2 cups all-purpose flour",
            "2 tablespoons olive oil",
            "2 teaspoons salt",
            "1 teaspoon sugar",
            "1 cup tomato sauce",
            "2 cups fresh mozzarella, sliced",
            "Fresh basil leaves",
            "Extra virgin olive oil for drizzling"
        ],
        instructions: [
            "Dissolve yeast in warm water with sugar. Let stand for 5 minutes until foamy.",
            "In a large bowl, combine flour and salt. Make a well in the center.",
            "Add yeast mixture and olive oil to the well. Mix until a dough forms.",
            "Knead dough on a floured surface for 8-10 minutes until smooth and elastic.",
            "Place in an oiled bowl, cover, and let rise for 1 hour until doubled in size.",
            "Preheat oven to 475°F (245°C). If you have a pizza stone, heat it too.",
            "Punch down dough and divide into 2 balls. Roll each into a 12-inch circle.",
            "Spread tomato sauce over dough, leaving a 1-inch border.",
            "Arrange mozzarella slices on top and drizzle with olive oil.",
            "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
            "Remove from oven and immediately top with fresh basil leaves."
        ],
        nutrition: {
            calories: "520",
            protein: "22g",
            carbs: "68g",
            fat: "18g"
        }
    },
   {
    id: 12,
    title: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&h=300&fit=crop",
    time: "45 mins",
    servings: "4 servings",
    difficulty: "Medium",
    tags: ["indian", "non-vegetarian", "dinner"],
    ingredients: [
      "500g chicken",
      "1 cup tomato puree",
      "1/2 cup fresh cream",
      "2 tablespoons butter",
      "1 tablespoon ginger-garlic paste",
      "Spices (garam masala, chili powder, turmeric)"
    ],
    instructions: [
      "Marinate chicken with spices and yogurt.",
      "Cook chicken until tender.",
      "Prepare gravy with butter, tomato puree, and spices.",
      "Add chicken and cream, simmer for 10 minutes.",
      "Serve hot with naan or rice."
    ],
    nutrition: {
      calories: "430",
      protein: "28g",
      carbs: "18g",
      fat: "30g"
    }
  },
  {
    id: 13,
    title: "Paneer Butter Masala",
    description: "Rich and creamy curry made with paneer cubes",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=500&h=300&fit=crop",
    time: "40 mins",
    servings: "4 servings",
    difficulty: "Medium",
    tags: ["indian", "vegetarian"],
    ingredients: [
      "250g paneer",
      "1 cup tomato puree",
      "1/2 cup cream",
      "2 tablespoons butter",
      "Cashew paste",
      "Indian spices"
    ],
    instructions: [
      "Fry paneer cubes lightly.",
      "Prepare tomato-cashew gravy.",
      "Add spices, butter, and cream.",
      "Add paneer and simmer.",
      "Serve with roti or naan."
    ],
    nutrition: {
      calories: "390",
      protein: "14g",
      carbs: "22g",
      fat: "28g"
    }
  },
  {
    id: 14,
    title: "Biryani",
    description: "Fragrant rice dish cooked with spices and meat",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=300&fit=crop",
    time: "60 mins",
    servings: "5 servings",
    difficulty: "Hard",
    tags: ["indian", "rice", "non-vegetarian"],
    ingredients: [
      "Basmati rice",
      "Chicken or mutton",
      "Yogurt",
      "Whole spices",
      "Fried onions",
      "Saffron milk"
    ],
    instructions: [
      "Marinate meat with spices and yogurt.",
      "Parboil rice with whole spices.",
      "Layer rice and meat.",
      "Cook on low heat (dum).",
      "Serve with raita."
    ],
    nutrition: {
      calories: "520",
      protein: "26g",
      carbs: "55g",
      fat: "22g"
    }
  },
  {
    id: 15,
    title: "Samosa",
    description: "Crispy pastry filled with spicy potato mixture",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop",
    time: "30 mins",
    servings: "6 pieces",
    difficulty: "Medium",
    tags: ["indian", "snack", "vegetarian"],
    ingredients: [
      "Potatoes",
      "Green peas",
      "Flour",
      "Spices",
      "Oil"
    ],
    instructions: [
      "Prepare potato filling.",
      "Make dough and shape samosas.",
      "Fill and seal.",
      "Deep fry until golden."
    ],
    nutrition: {
      calories: "180",
      protein: "4g",
      carbs: "22g",
      fat: "9g"
    }
  }
];

// Make data available globally
window.recipesData = recipesData;