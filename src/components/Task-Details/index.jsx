import React from "react";

// Import Hoosks
import { useParams, useNavigate } from "react-router-dom";
//----------------------------------------------------------------

// Import Components
import Button from "../Button";
//----------------------------------------------------------------

// Import Styles
import { TaskDetailsDiv } from "./style";
import { BackButtonDiv } from "./style";

//----------------------------------------------------------------

const TaskDetails = () => {

    const  params = useParams();
    const navigate = useNavigate();

    return (

        <div>

            <BackButtonDiv>
                <Button
                onClick={() => navigate(-1)}
                >Voltar</Button>
            </BackButtonDiv>

            <TaskDetailsDiv>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Ex nemo perspiciatis a corrupti, et earum.
                </p>
            </TaskDetailsDiv>

        </div>

    );
} ;

export default TaskDetails;