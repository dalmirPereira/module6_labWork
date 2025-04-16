//------------------- Module 6: Lab Exercise 2 ------------------------


import SingleCat from "./SingleCat";

const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' }
]

function BigCats(props){

    const renderCat = cats.map(cat => (
         <SingleCat 
            key={Math.random()}
            name={cat.name}
            latinName={cat.latinName} />
        )
    )
    
    return (
        <div className="catList">
            <ul> { renderCat } </ul>
        </div>  
    )
}

export default BigCats;