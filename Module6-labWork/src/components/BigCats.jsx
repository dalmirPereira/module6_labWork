//------------------- Module 6: Lab Exercise 2, 4 and 5 ------------------------

import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm"

const bigCats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' }
]

function Button({ onClick, children }) {
    return (
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}


function BigCats(){

    //---- added state (ex 4) ----------
    const [cats, setCats] = useState(bigCats);
    const [updatedCats, setUpdatedCats] = useState(bigCats);

    //----- functions for changing the list (ex 4) -----
    const alphabetCats = () => {
        const newCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
        
        return setCats(newCats);
    }

    const reverseCats = () => {
        const newCats = [...cats].sort((a, b) => b.name.localeCompare(a.name));
        
        return setCats(newCats);
    }

    const pantheraCats = () => {
        const newCats = [...cats].filter(cat => cat.latinName.includes("Panthera"));
        
        return setCats(newCats);
    }
    //-----------------------------------------------------------
    
    //----- functions for setting new values to the list (ex 4) -----
    const handleAddCat = (newCat) => {
        setCats([...cats, newCat]);
        setUpdatedCats([...updatedCats, newCat]); //save the new data for 'Full List'
    }
    //-----------------------------------------------------------

    //----- functions for deleting cat (ex 5) -----
    const deleteCat = (catName) => {
        const newCats = [...cats].filter(cat => !(cat.name === catName));
        
        setCats(newCats);
        setUpdatedCats(newCats); //save the new data for 'Full List'
    }
    //-----------------------------------------------------------


    const renderCat = cats.map(cat => (  
         <>
            <SingleCat 
                key={Math.random()}
                name={cat.name}
                latinName={cat.latinName} 
                photo={cat.photo} />
            <Button onClick={() => deleteCat(cat.name)}> 
                Delete Cat
            </Button>
        </>
        )
    )
    
    return (
        <>
            <div className="catList">
                { renderCat }
            </div>

            {/* ----- Added Buttons (ex 4) --------*/}
            <Button onClick={alphabetCats}> 
                Sort Alphabetically
            </Button>
            <Button onClick={reverseCats}> 
                Reverse List
            </Button>
            <Button onClick={pantheraCats}> 
                Show Panthera family
            </Button>
            <Button onClick={() => setCats(updatedCats)}> 
                Full List
            </Button>

             {/* ----- Added Form (ex 5) --------*/}
             <AddCatForm onAddCat={handleAddCat} />  
        </>
    )
}

export default BigCats;