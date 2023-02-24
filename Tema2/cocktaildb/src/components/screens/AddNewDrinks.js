import "../../styles/AddNewDrinks.css";
import { BackButton } from "../common/BackButton";
import { Dropdown } from "../common/Dropdown";

export const AddNewDrinks = ({drinkCategories, cancelDrinkAdd, addNewDrink}) => {

    const handleOnSubmitForm = e => {
        e.preventDefault();
        let drinkCategory = e.target.drinkType.value;
        let drinkRecipe = Array.from(e.target.ingredient).map(ingredient => ingredient.value);
        let drink = { strDrink: e.target.drinkName.value,
                      strCategory: drinkCategory,
                      recipe: drinkRecipe,
                      strDrinkThumb: e.target.imageUrl.value,
                      isCustom: true
                    }
        let categoryToReturn = drinkCategories.find(category => category.name === drinkCategory);
        addNewDrink(drink, categoryToReturn);
    }
    
    return(
        <div className="addNewDrinks">
            <div className="inputForm">
                <div>
                    <form name="dadas" className="drinksForm" onSubmit={handleOnSubmitForm}>
                        <input type="text" name="drinkName" placeholder="Drink name"></input>
                        <input type="text" name="ingredient" placeholder="Ingredient name"></input>
                        <input type="text" name="ingredient" placeholder="Ingredient name"></input>
                        <input type="test" name="imageUrl" placeholder="Image URL"></input>
                        <Dropdown drinkCategories={drinkCategories}></Dropdown>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
            <div className="backContainer">
                <BackButton goBack={cancelDrinkAdd}></BackButton>
            </div>
        </div>
    );
}