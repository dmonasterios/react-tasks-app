import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    function handleSubmit(e) {
        e.preventDefault();
        createTask({
            title: title,
            description: description,
        });
        setTitle("");
        setDescription("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="taskForm"
        >
            <label className="taskInputTitle">
                <p className="mr-16">Tarea:</p>
                <input
                className="h-12 w-full"
                    type="text"
                    placeholder="Escribe tu Tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                />
            </label>
            <label className="taskInputDescription">
                <p className="mr-5">Descripción:</p>
                <textarea
                className="w-full"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Escribe la Descripción de tu Tarea"
                    value={description}
                >

                </textarea>
            </label>

            <button
                disabled={title && description ? "" : "disabled"}
                className={`taskFormBtn ${
                    title && description ? "bg-blue-400 text-black hover:bg-blue-600 hover:text-white" : "bg-gray-400 text-gray-200"
                }`}
            >
                Guardar
            </button>
        </form>
    );
};

export default TaskForm;
