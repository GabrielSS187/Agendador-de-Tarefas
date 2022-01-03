import React from "react";

// Import Components
import Task from "../Task";
//----------------------------------------------------------------

const Tasks = ({ tasks, hanfleTaskClick, handleTaskDelete }) => {

    return (
        <div>
            { tasks.map( ( task ) => (
             <Task key={task.id} 
             task={task}
             hanfleTaskClick={hanfleTaskClick}
             handleTaskDelete={handleTaskDelete}
             />) )}
        </div>
    );
};

export default Tasks;