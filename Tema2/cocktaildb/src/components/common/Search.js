import "../../styles/Search.css"
import { useEffect, useState } from "react";

const Search = ({handleSearch, searchResults}) => {

    let [keyWord, setKeyWord] = useState("");

    useEffect(() => {
        if (keyWord !== undefined && keyWord !== "") {
        fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyWord}`)
            .then(response => response.json())
            .then(data => handleSearch(data.drinks))
            .catch(error => console.log(error));
        } else {
            handleSearch([]);
        }
       
    }, [keyWord]);

    

    return(
        <div className = "search">
                <input className="searchInput" type="text" placeholder="Search by name" value={keyWord} onChange={e => setKeyWord(e.target.value)}></input>
        </div>
    );
}

export default Search;