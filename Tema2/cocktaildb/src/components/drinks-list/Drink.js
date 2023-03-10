import "../../styles/drinks-list/Drink.css";
import { Component } from "react";

class Drink extends Component {
    render() {
        return(
            <div className = "drinkItem" onClick={() => this.props.viewDrink(this.props.drink)}>
                <img className = "drinkItemIcon" src={this.props.drink.strDrinkThumb}></img>
                <div className = "drinkItemName" >{this.props.drink.strDrink}</div>
            </div>
        );
    }
}

export default Drink;