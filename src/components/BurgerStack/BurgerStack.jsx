const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, index) => (
                <li
                    key={index}
                    style={{ backgroundColor: ingredient.color }}
                >
                    {ingredient.name}
                    <button onClick={() => props.removeFromBurger(index)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default BurgerStack;



// ALTERNATE CODE USING INGREDIENT COMPONENT - LEVEL UP

// import Ingredient from '../Ingredient/Ingredient';

// const BurgerStack = (props) => {
//   return (
//     <ul>
//       {props.stack.map((ingredient, index) => (
//         <Ingredient 
//           key={index}
//           ingredient={ingredient}
//           action={props.removeFromBurger}
//           actionType="remove"
//           index={index}
//         />
//       ))}
//     </ul>
//   );
// };

// export default BurgerStack;