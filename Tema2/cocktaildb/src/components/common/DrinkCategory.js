import "../../styles/DrinkCategory.css";
import { useEffect, useState } from "react";
import DrinksList from "./DrinksList";


export const DrinkCategory = ({currentCategory, searchResults, viewDrink}) => {

    let [drinks, setDrinks] = useState([]);
    let [category, setCategory] = useState(currentCategory);

    useEffect(() => {
        if (searchResults.length) {
            setCategory(currentCategory);
            setDrinks(searchResults);
        } else {
            setCategory(currentCategory);
            fetch(currentCategory?.resourceURL)
               .then(response => response.json())
               .then(data => setDrinks(data.drinks));
        }
    }, [currentCategory, searchResults]);

    return(
        <div className="drinkCategory">
            <div className="drinkCategoryName">{category?.name}</div>
            <DrinksList drinks={drinks} viewDrink={viewDrink}></DrinksList>
        </div>
    );
}