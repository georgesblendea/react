import "../../styles/Search.css"
import { useEffect, useState } from "react";

const Search = ({handleSearch}) => {

    let [keyWord, setKeyWord] = useState("");

    useEffect(() => {
        if (keyWord !== undefined && keyWord !== "") {
        fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyWord}`)
            .then(response => response.json())
            .then(data => handleSearch(data.drinks));
        } else {
            handleSearch([]);
        }
    }, [keyWord]);

    

    return(
        <div className = "search">
            <div>icon</div>
            <div><input type="text" placeholder="Search by name" value={keyWord} onChange={e => setKeyWord(e.target.value)}></input></div>
        </div>
    );
}

export default Search;