import './App.css';
import IngredientList from "./components/IngredientList/IngredientList.jsx"
import BurgerStack from "./components/BurgerStack/BurgerStack.jsx"
import { useState } from 'react';

const App = () => {
  const [stack, setStack] = useState([]);

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const addToBurger = (ingredient) => {
    // Create a new array with all existing ingredients plus the new one
    const newStack = [...stack, ingredient];
    // Update the state with the new array
    setStack(newStack);
  };

  const removeFromBurger = (index) => {
    // Create a new array by filtering out the ingredient at the specified index
    const newStack = stack.filter((item, i) => i !== index);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          addToBurger={addToBurger}
        />
        <BurgerStack
          stack={stack}
          removeFromBurger={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;