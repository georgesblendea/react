import "../../styles/menu/MenuItem.css";

export const MenuItem = ({name, onClick}) => {

    const handleOnClick = () => {
        onClick(name);
    }

    return(
        <div className = "menuItem" onClick={handleOnClick}>{name}</div>
    )
}
