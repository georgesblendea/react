import MenuItem from "../MenuItem.js"
import "../../../styles/Menu.css"




export const Menu = ({items, filterByCategory}) => {

    const renderItem = (item, filterByCategory) => {
        return <MenuItem name={item.name} key={item.name} filterByCategory={filterByCategory}></MenuItem>
    }
    
    const renderItems = (items, filterByCategory) => {
        return <div className = "menu">{items.map(item => renderItem(item, filterByCategory))}</div>;
    }


    return(renderItems(items, filterByCategory));
}