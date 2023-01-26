import "../../styles/Home.css";
import { DrinkCategory } from "../common/DrinkCategory";




const renderHome = (currentCategory, searchResults, viewDrink) => {
    return (
        <div className="home">
            <DrinkCategory currentCategory={currentCategory} searchResults={searchResults} viewDrink={viewDrink}></DrinkCategory>
        </div>
    );
}

export const Home = ({currentCategory, searchResults, viewDrink}) => {
    
    return(renderHome(currentCategory, searchResults, viewDrink));
}