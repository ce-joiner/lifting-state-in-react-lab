const Ingredient = (props) => {
    // Destructure all the props needed
    // action: the function to call (either addToBurger or removeFromBurger)
    // actionType: a string indicating whether this is an 'add' or 'remove' button
    const { ingredient, action, actionType } = props;

    return (
        <li style={{ backgroungColor: ingredient.color }}>
            {ingredient.name}
            {/* 
        The button's onClick behavior changes based on actionType:
        - For 'add': pass the entire ingredient object to the action function
        - For 'remove': pass the index (stored in props.index) to the action function
        - Default case (should never happen): pass null
      */}
            <button onClick={() => action(actionType === "add" ? ingredient : actionType === "remove" ? props.index : null)}>
                {/* 
          - Show '+' for add buttons
          - Show 'X' for remove buttons
        */}
                {actionType === "add" ? "+" : "X"}
            </button>
        </li>
    );
};