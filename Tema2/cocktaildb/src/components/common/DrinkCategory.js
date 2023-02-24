import "../../styles/DrinkCategory.css";
import { useEffect, useState } from "react";
import DrinksList from "../drinks-list/DrinksList";

export const DrinkCategory = ({currentCategory, customDrinks, searchResults, viewDrink}) => {

    let [drinks, setDrinks] = useState([]);
    let [category, setCategory] = useState(currentCategory);
    let [emptyPlaceholder, setEmptyPlaceholder] = useState();

    useEffect(() => {
        if (searchResults.length) {
            console.log(searchResults)
            setCategory(currentCategory);
            setDrinks(searchResults);
        } else {
            setCategory(currentCategory);
            fetch(currentCategory?.resourceURL)
               .then(response => response.json())
               .then(data => setDrinks(data.drinks));
        }
    }, [currentCategory, searchResults]);

    const customDrinksForCategory = (currentCategory, customDrinks) => {
        return customDrinks.filter(drink => drink.strCategory === currentCategory?.name);
    }

    const renderCustomDrinks = (currentCategory, customDrinks) => {
        const currentCustomDrinks = customDrinksForCategory(currentCategory, customDrinks);
        if (currentCustomDrinks.length) {
            return (
                <>
                    <div className="drinkSubCategoryName">Custom Drinks</div>
                    <DrinksList drinks={customDrinksForCategory(currentCategory, customDrinks)} viewDrink={viewDrink}></DrinksList>
                    <div className="drinkSubCategoryName">Main Drinks</div>
                </>
            );
        }
        return <></>;
    }

    return(
        <div className="drinkCategory">
            <div className="drinkCategoryName">{category?.name}</div>
            {renderCustomDrinks(currentCategory, customDrinks)}
            <DrinksList drinks={drinks} viewDrink={viewDrink}></DrinksList>
        </div>
    );
}