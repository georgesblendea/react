
export const ViewDrinkItem = ({drink}) => {
    return(
        <div className="viewDrinkItem">
                <div className = "viewDrinkName" >{drink.strDrink}</div>
                <img className = "viewDrinkImage" src={drink.strDrinkThumb}></img>
        </div>
    );
}