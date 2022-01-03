import React from "react";

// Imports Compnents
import Tasks from "./components/Tasks";
import AddTask from "./components/Add-Task";
import TaskDetails from "./components/Task-Details";
//----------------------------------------------------------------

// Import Axios
import axios from "axios";
//----------------------------------------------------------------

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//----------------------------------------------------------------

// Hoosks
import { useState, useEffect } from "react";
// ----------------------------------------------------------------

function App() {

  const [ tasks, setTask ] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTask( data );
    }
    fetchTasks();
  }, []);

  const hanfleTaskAddition = ( ( taskTitle )  => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: crypto.randomUUID(),
        completed: false
      }
    ];
    
    setTask(newTask);
  });

  const handleTaskDelete = ( taskId )  => {
    const newTasks = tasks.filter( ( task ) => 
    task.id !== taskId );

    setTask(newTasks);
  };

  const hanfleTaskClick = ( taskId ) => {
    const newTask = tasks.map(( task ) => {
      if ( task.id === taskId ) return {
        ...task,
        completed: !task.completed
      };
      return task;
    });
    setTask(newTask);
  };

  return (

    <BrowserRouter>
        <div className="container">

            <header>Minhas Tarefas</header>
            <br />
            
              <Routes>
                  <Route 
                  path="/" exact element={(
                    <div>
                        <AddTask
                        hanfleTaskAddition={hanfleTaskAddition}
                        />
                        <Tasks
                        tasks={tasks}
                        hanfleTaskClick={hanfleTaskClick}
                        handleTaskDelete={handleTaskDelete}
                        />
                    </div>
                  )}
                  />
                  <Route 
                  path="/:taskTitle" exact element={<TaskDetails />}
                  />
              </Routes>

        </div>
    </BrowserRouter>

  );
};

export default App;
