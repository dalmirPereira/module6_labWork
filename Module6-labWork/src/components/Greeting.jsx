//------------------- Module 6: Lab Exercise 1 ------------------------

import { Children } from "react";

function Greeting(props, children) {

    return (
        <div>
            <p>
                Hello {props.name ? props.name : "World"} !
            </p>
            {children}
        </div>
    )
}

export default Greeting;