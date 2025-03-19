const IngredientList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <li
                    key={index}
                    style={{ backgroundColor: ingredient.color }}
                >
                    {ingredient.name}
                    <button onClick={() => props.addToBurger(ingredient)}>+</button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientList;


// ALTERNATE CODE USING INGREDIENT COMPONENT - LEVEL UP

// import Ingredient from '../Ingredient/Ingredient';

// const IngredientList = (props) => {
//   return (
//     <ul>
//       {props.ingredients.map((ingredient, index) => (
//         <Ingredient 
//           key={index}
//           ingredient={ingredient}
//           action={props.addToBurger}
//           actionType="add"
//         />
//       ))}
//     </ul>
//   );
// };

// export default IngredientList;