//------------------- Module 6: Lab Exercise 2 ------------------------


function SingleCat(props){
    return (
        <div className="singleCat">
            <h1>{props.name}</h1>
            <h3>{props.latinName}</h3>
            <img src={props.photo} alt={props.photo}/>
        </div>
    )
}

export default SingleCat;