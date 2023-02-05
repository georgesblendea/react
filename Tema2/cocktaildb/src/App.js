import './App.css';
import { useState } from 'react';
import { Home } from './components/screens/Home';
import { ViewDrink } from './components/screens/ViewDrink';
import { Banner } from "./components/common/dumb/Banner.js";
import { Menu } from "./components/common/dumb/Menu.js";
import { AddNewDrinks } from './components/screens/AddNewDrinks';
import Search from "./components/common/Search.js";

const App = () => {

  const drinkCategories = [
    { name: "Alcoholic", resourceURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" },
    { name: "Non Alcoholic", resourceURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" },
    { name: "Ordinary Drink", resourceURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"},
    { name: "Cocktail Glass", resourceURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail" },
    { name: "Champagne Flute", resourceURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer" },
  ];

  let [currentDrink, setCurrentDrink] = useState(null);
  let [currentCategory, setCurrentCategory] = useState(drinkCategories[0]);
  let [searchResults, setSearchResults] = useState([]);
  let [customDrinks, setCustomDrinks] = useState([]);

  const handleSearch = results => {
    if (results.length) {
      setSearchResults(results);
      setCurrentCategory({name: "Search"})
    } else {
      setSearchResults([]);
      setCurrentCategory(drinkCategories[0])
    }
  }

  const filterByCategory = category => {
      // const cat=drinkCategories.find(c => c.name === category);
      setCurrentCategory(category);
      setCurrentDrink(null);
      setSearchResults([])
  }

  const viewDrink = drink => {
      setCurrentDrink(drink);
  };

  const goBack = () => {
    setCurrentDrink(null);
  };

  const cancelDrinkAdd = () => {
    setCurrentDrink(null);
    setCurrentCategory(drinkCategories[0]);
  };

  const addCustomDrink = newDrink => {
      const drinks = customDrinks;
      drinks.push(newDrink);
      setCustomDrinks(drinks);
      console.log("App", customDrinks);
  };

  const renderScreens = (currentDrink, currentCategory, viewDrink, searchResults, goBack, cancelDrinkAdd, addCustomDrink, customDrinks) =>  {
    if ((currentDrink === null || currentDrink === undefined) && currentCategory.name !== "Add New") {
      console.log("App", currentCategory)
      return(<Home currentCategory = {currentCategory} viewDrink={viewDrink} searchResults={searchResults} customDrinks={customDrinks}></Home>);
    } else if (currentCategory.name === "Add New") {
      return(<AddNewDrinks drinkCategories={drinkCategories} cancelDrinkAdd={cancelDrinkAdd} addNewDrink={addCustomDrink} ></AddNewDrinks>);
    } else {
      return(<ViewDrink drink={currentDrink} goBack={goBack}></ViewDrink>);
    }
  };

  const menuItems = () => {
    let menuItems = [...drinkCategories];
    menuItems.push({ name: "Add New"});
    return menuItems;
  }

  return (
    <>
      <Banner></Banner>
      <Menu items={menuItems()} filterByCategory={filterByCategory}></Menu>
      <Search handleSearch={handleSearch}></Search>
      {renderScreens(currentDrink, currentCategory, viewDrink, searchResults, goBack, cancelDrinkAdd, addCustomDrink, customDrinks)}
    </>
  );
}

export default App;
