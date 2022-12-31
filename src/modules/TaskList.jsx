import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <div className="text-center taskList">
            <p className="text-2xl p-5">No hay Tareas</p>
        </div>;
    }
    return (
        <div className="taskList">
            {tasks.map((task,i) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default TaskList;
