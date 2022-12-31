import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    function createId(){
        return String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
    }
    function createTask(task) {
        const newTask = {
            id: createId(),
            title: task.title,
            description: task.description,
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};
