import React from "react";

// Import Styles
import { ButtonClick } from "./style";
//----------------------------------------------------------------

const Button = ( { children, onClick } ) => {

    return (

        <div>
            <ButtonClick onClick={onClick}>
                {children}
            </ButtonClick>
        </div>

    );
};

export default Button;