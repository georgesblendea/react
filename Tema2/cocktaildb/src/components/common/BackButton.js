
export const BackButton = ({goBack}) => {
    return(
        <button className="backButton" onClick={()=> goBack()}>Back</button>
    );
}