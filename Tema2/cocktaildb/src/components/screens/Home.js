import "../../styles/Home.css";
import { DrinkCategory } from "../common/DrinkCategory";

const renderHome = (currentCategory, searchResults, viewDrink, customDrinks) => {
    return (
        <div className="home">
            <DrinkCategory currentCategory={currentCategory} customDrinks={customDrinks} searchResults={searchResults} viewDrink={viewDrink}></DrinkCategory>
        </div>
    );
}

export const Home = ({currentCategory, searchResults, viewDrink, customDrinks}) => {
    
    return(renderHome(currentCategory, searchResults, viewDrink, customDrinks));
}