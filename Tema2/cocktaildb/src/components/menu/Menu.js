import { MenuItem } from "./MenuItem.js";
import "../../styles/menu/Menu.css";

export const Menu = ({items, filterByCategory}) => {

    const handleOnItemClick = itemName => {
        const category = items.find(c => c.name === itemName);
        filterByCategory(category);
    }

    const renderItem = (item) => {
        return <MenuItem name={item.name} key={item.name} onClick={handleOnItemClick}></MenuItem>
    }
    
    const renderItems = () => {
        return <div className = "menu">{items.map(item => renderItem(item))}</div>;
    }


    return(renderItems());
}