//------------------- Module 6: Lab Exercise 2, 4 and 5 ------------------------
import { useState } from "react";

function AddCatForm({ onAddCat }) {
    const [ cat, setCat ] = useState({name: '', latinName: '', photo: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat(cat);
        setCat({ name: '', latinName: '', photo: '' });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name:
                    <input name="name" value={cat.name}
                    onChange={(e) => setCat({ ...cat, [e.target.name]: e.target.value })}/>
                </label><br />
                <label> Latin Name:
                    <input name="latinName" value={cat.latinName}
                    onChange={(e) => setCat({ ...cat, [e.target.name]: e.target.value })}/>
                </label><br />
                <label> Photo (url):
                    <input name="photo" value={cat.photo}
                    onChange={(e) => setCat({ ...cat, [e.target.name]: e.target.value })}/>
                </label><br />
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatForm;