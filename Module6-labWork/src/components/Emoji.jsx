//------------------- Module 6: Lab Exercise 3 ------------------------

import { useState } from "react";
import * as emoji from "node-emoji";

function Button({ onClick, children }) {
    return (
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

function getMood(mood) {
    let newMood = '';

    if (mood == ":smile:") {
        newMood = ":heart_eyes:";
    } else if (mood == ":heart_eyes:") {
        newMood = ":sob:";
    } else if (mood == ":sob:") {
        newMood = ":smile:";
    }

    return newMood;
}

function Emoji() {

    const [mood, setMood] = useState(":smile:");

    return (
        <>
            <div>{emoji.emojify(mood)}</div>

            <Button onClick={() => setMood(getMood(mood))}>
                Change Mood
            </Button>
        </>
    )
}



export default Emoji;