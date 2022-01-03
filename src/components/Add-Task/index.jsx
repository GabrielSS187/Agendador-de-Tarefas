import React from "react";

// Imports Hooks
import { useState } from "react";
//----------------------------------------------------------------

// Import Components
import Button from "../Button"
//----------------------------------------------------------------

// Import Style
import { AddTaskDiv } from "./style";
import { InputAddTask } from "./style";
import { ButtonDiv }from "./style"
//----------------------------------------------------------------

const AddTask = ( { hanfleTaskAddition } ) => {

    const [ inputData, setInputData ] = useState ( "" );

    const handleInputChange = ( event ) => {
        setInputData ( event.target.value);
    };

    const handleAddTaskClick = () => {
        hanfleTaskAddition(inputData);
        setInputData ("");
    };

    return (

        <AddTaskDiv>
            <InputAddTask type="text" 
            onChange={handleInputChange}
            value={inputData}
            />
            <ButtonDiv>
                <Button onClick={handleAddTaskClick}
                >Adicionar
                </Button>
            </ButtonDiv>
        </AddTaskDiv>

    );
};

export default AddTask;