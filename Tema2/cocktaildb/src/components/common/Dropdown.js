

export const Dropdown = ({drinkCategories}) => {

    const renderValues = values => {
        return values.map(value => <option key={value.name} id={value}>{value.name}</option>);
    }

    return (
        <>
            <label>Choose drink type:</label>
            <select name="drinkType" placeholder="Drink Type">
                {renderValues(drinkCategories)}
            </select>
        </>
    );
}