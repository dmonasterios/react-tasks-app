import {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'

const TaskCard = ({task}) => {
    const {deleteTask} = useContext(TaskContext);
    const [taskCardStyle, setTaskCardStyle] = useState('animate-slide-in-left');

    function handleDeleteButton(){
        setTaskCardStyle('animate-fade-out');
        setTimeout(()=>{
            deleteTask(task.id);
        },500);
    }

    return (
        <div className={`taskCard  ${taskCardStyle}`}>
            <p className='text-2xl'>{task.title}</p>
            <p className='taskDescription'>
                {task.description}
            </p>
            <button
                className='deleteTaskBtn'
                onClick={handleDeleteButton}>
                    Eliminar Tarea
            </button>
        </div>
    );
};

export default TaskCard;
