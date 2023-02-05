import MenuItem from "../MenuItem.js"
import "../../../styles/Menu.css"




export const Menu = ({items, filterByCategory}) => {

    const handleOnItemClick = itemName => {
        const category=items.find(c => c.name === itemName);
        filterByCategory(category);
    }

    const renderItem = (item) => {
        return <MenuItem name={item.name} key={item.name} filterByCategory={handleOnItemClick}></MenuItem>
    }
    
    const renderItems = (items) => {
        return <div className = "menu">{items.map(item => renderItem(item))}</div>;
    }


    return(renderItems(items));
}