import "../../styles/MenuItem.css";
import { Component } from "react";

class MenuItem extends Component {
    render() {return(
        <div className = "menuItem" onClick={() => this.props.filterByCategory(this.props.name)}>{this.props.name}</div>
    );}
}

export default MenuItem;