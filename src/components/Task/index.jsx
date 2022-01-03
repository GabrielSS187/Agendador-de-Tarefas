import React from "react";

// Import Hoosks
import { useNavigate } from "react-router-dom";
//----------------------------------------------------------------

// React Icons
import { CgClose, CgInfo } from "react-icons/cg";
//----------------------------------------------------------------

// Import Styles
import { TaskDiv } from "./style";
import { TaskTitle } from "./style"
import { ButtonsContainer } from "./style";
//----------------------------------------------------------------

const Task = ( { task, hanfleTaskClick, handleTaskDelete } ) => {

    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    };

    return (
        <TaskDiv
          style={ task.completed
           ? 
           { borderLeft: "6px solid chartreuse" }
            : 
            {} }>

            <TaskTitle
            onClick={() => hanfleTaskClick(task.id)}
            >
                {task.title}
            </TaskTitle>

            <ButtonsContainer>
                <button 
                onClick={() => handleTaskDelete(task.id)}
                >
                    <CgClose />
                </button>

                <button onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
            </ButtonsContainer>
        </TaskDiv>
    );
};

export default Task;