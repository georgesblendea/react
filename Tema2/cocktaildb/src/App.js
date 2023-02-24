import './App.css';
import { useState } from 'react';
import { Home } from './components/screens/Home';
import { ViewDrink } from './components/screens/ViewDrink';
import { Banner } from "./components/common/Banner.js";
import { Menu } from "./components/menu/Menu.js";
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
  let [previousCategory, setPreviousCategory] = useState(drinkCategories[0]);
  let [searchResults, setSearchResults] = useState([]);
  let [customDrinks, setCustomDrinks] = useState([]);

  const handleSearch = results => {
    if (results.length) {
      setSearchResults(results);
      setPreviousCategory(currentCategory);
      setCurrentCategory({name: "Search"});
    } else {
      setSearchResults([]);
      setCurrentCategory(previousCategory)
    }
  }
  
  const onFilterByCategory = category => {
      setCurrentCategory(category);
      setCurrentDrink(null);
      setSearchResults([])
  }

  const onViewDrink = drink => {
      setCurrentDrink(drink);
  };

  const onGoBack = () => {
    setCurrentDrink(null);
  };

  const onCancelDrinkAdd = () => {
    setCurrentDrink(null);
    setCurrentCategory(drinkCategories[0]);
  };

  const onAddCustomDrink = (newDrink, categoryToReturn) => {
      const drinks = customDrinks;
      drinks.push(newDrink);
      setCustomDrinks(drinks);
      setCurrentCategory(categoryToReturn);
  };

  const shouldRenderHomeScreen = () => {
    return (currentDrink === null || currentDrink === undefined) && currentCategory.name !== "Add New";
  }

  const shouldRenderAddNewScreen = () => {
    return currentCategory.name === "Add New";
  }

  const shouldRenderViewDrinkScreen = () => {
    return currentDrink !== null && currentDrink !== undefined;
  }

  const renderHomeScreen = () => {
    if (shouldRenderHomeScreen()) {
      return(<Home currentCategory = {currentCategory} viewDrink={onViewDrink} searchResults={searchResults} customDrinks={customDrinks}></Home>);
    }
  }

  const renderAddNewDrinksScreen = () => {
    if (shouldRenderAddNewScreen()) {
      return(<AddNewDrinks drinkCategories={drinkCategories} cancelDrinkAdd={onCancelDrinkAdd} addNewDrink={onAddCustomDrink} ></AddNewDrinks>); 
    }
  }

  const renderViewDrinkScreen = () => {
    if (shouldRenderViewDrinkScreen()) {
      return(<ViewDrink drink={currentDrink} goBack={onGoBack}></ViewDrink>);
    }
  } 

  const menuItems = () => {
    let menuItems = [...drinkCategories];
    menuItems.push({ name: "Add New"});
    return menuItems;
  }

  return (
    <>
      <Banner></Banner>
      <Menu items={menuItems()} filterByCategory={onFilterByCategory}></Menu>
      <Search handleSearch={handleSearch} searchResults={searchResults}></Search>
      {renderHomeScreen()}
      {renderAddNewDrinksScreen()}
      {renderViewDrinkScreen()}
    </>
  );
}

export default App;
