import "../../styles/AddNewDrinks.css";
import { BackButton } from "../common/BackButton";
import { Dropdown } from "../common/Dropdown";


export const AddNewDrinks = ({drinkCategories, cancelDrinkAdd, addNewDrink}) => {

    const handleOnSubmitForm = e => {
        e.preventDefault();
        console.log("AND", Array.from(e.target.ingredient))
        let drinkRecipe = Array.from(e.target.ingredient).map(ingredient => ingredient.value);
        let drink = { strDrink: e.target.drinkName.value,
                      strCategory: e.target.drinkType.value,
                      recipe: drinkRecipe,
                      strDrinkThumb: e.target.imageUrl.value,
                      isCustom: true
                    }
        addNewDrink(drink);
    }
    
    return(
        <div className="addNewDrinks">
            <div className="inputForm" >
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