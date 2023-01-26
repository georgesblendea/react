import "../../styles/ViewDrink.css";
import { useEffect, useState } from "react";
import { ViewDrinkItem } from "../common/ViewDrinkItem";
import { BackButton } from "../common/BackButton";

export const ViewDrink = ({drinkId, goBack}) => {

    let [state, setState] = useState({drink: {strDrink: "", strDrinkThumb: ""}})

    useEffect(() =>{
        fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
            .then(response => response.json())
            .then(data => setState({ drink : data.drinks[0]}));
    }, []);

    return(
        <div className = "viewDrink">
            <ViewDrinkItem drink={state.drink}></ViewDrinkItem>
            <div className="backContainer">
                <BackButton goBack={goBack}></BackButton>
            </div>
        </div>
    );
}