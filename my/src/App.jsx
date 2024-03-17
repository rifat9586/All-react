import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RecipeComponent() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleRecipeSelection = (recipe) => {
    if (selectedRecipes.includes(recipe)) {
      // Recipe already selected, show toast message
      toast.error("You've already selected this recipe!");
    } else {
      // Add the recipe to selectedRecipes
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        <li onClick={() => handleRecipeSelection("Buon")}>Buon</li>
        {/* Add other recipes here */}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default RecipeComponent;
