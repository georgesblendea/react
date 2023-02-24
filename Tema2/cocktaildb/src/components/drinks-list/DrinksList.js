import "../../styles/drinks-list/DrinksList.css";

import { useEffect, useState } from "react";
import Drink from "./Drink";

const DrinksList = ({drinks, viewDrink}) => {

    let [currentDrinks, setCurrentDrinks] = useState([]);

    useEffect(() => setCurrentDrinks(drinks), [drinks])

    const renderDrink = (drink, viewDrink) => {
        return <Drink key={drink.idDrink} drink={drink} viewDrink = {viewDrink}></Drink>
    }

    const renderDrinks = (drinks, viewDrink) => {
        return drinks.map(drink => renderDrink(drink, viewDrink));
    }

    return(
        <div className="drinksList">
            {renderDrinks(currentDrinks, viewDrink)}
        </div>
    );
}

export default DrinksList;