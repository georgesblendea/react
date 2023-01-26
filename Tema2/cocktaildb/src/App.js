import './App.css';
import { useState } from 'react';
import { Home } from './components/screens/Home';
import { ViewDrink } from './components/screens/ViewDrink';
import { Banner } from "./components/common/dumb/Banner.js";
import { Menu } from "./components/common/dumb/Menu.js";
import Search from "./components/common/Search.js";

const App = () => {

  const drinkCategories = [
    { name: "Alcoholic", resourceURL: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" },
    { name: "Non Alcoholic", resourceURL: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" },
    { name: "Ordinary Drink", resourceURL: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"},
    { name: "Cocktail Glass", resourceURL: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail" },
    { name: "Champagne Flute", resourceURL: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer" }
  ];

  let [currentDrink, setCurrentDrink] = useState(null);
  let [currentCategory, setCurrentCategory] = useState(drinkCategories[0]);
  let [searchResults, setSearchResults] = useState([]);

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
      const cat=drinkCategories.find(c => c.name === category);
      setCurrentCategory(cat);
      setCurrentDrink(null);
      setSearchResults([])
  }

  const viewDrink = drink => {
      setCurrentDrink(drink);
  };

  const goBack = () => {
    setCurrentDrink(null);
  };

  return (
    <>
      <Banner></Banner>
      <Menu items={drinkCategories} filterByCategory={filterByCategory}></Menu>
      <Search handleSearch={handleSearch}></Search>
      <>{(currentDrink === null || currentDrink === undefined) ?
      <Home currentCategory = {currentCategory} viewDrink={viewDrink} searchResults={searchResults}></Home> :
      <ViewDrink drinkId={currentDrink} goBack={goBack}></ViewDrink>}
      </>
    </>
  );
}

export default App;
