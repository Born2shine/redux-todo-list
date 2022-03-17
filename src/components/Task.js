import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, setTaskAsCompleted } from '../store/task-actions'

function Task({task}) {
    const dispatch = useDispatch() 
    const handleChecked = (e,id) => dispatch(setTaskAsCompleted(e,id))
    const handleDelete = (id) => dispatch(deleteTask(id))
    const handleEdit = (id) => dispatch(editTask(id))
    // const handleDelete = (id) => {
    //     dispatch(tasksAction.removeTask({
    //         id: id
    //     }))
    // }
    // const handleChecked = (e,id) => {
    //     var isTaskCompleted = e.target.checked
    //     dispatch(tasksAction.taskCompleted({
    //         id: id,
    //         isTaskCompleted: isTaskCompleted
    //     }))
    // }
    // const handleEdit = (id) => {
    //     dispatch(tasksAction.editTask({
    //         id: id
    //     }))
    // }
  return (
    <>
        {/* single todo  */}
        <div className={`single-todo ${task.taskCompleted && 'lineThrough'}`}>
                    <div className='left'>
                        <input type='checkbox' datatype='checked'  onChange={(e) => handleChecked(e, task.id)} />
                        <p className='task'>{task.task}</p>
                    </div>
                    <div className='right'>
                        <span className='due-date'> 
                            {/* <span> <i className='fas fa-hourglass-half'></i> </span>
                            28th Jun 2020 */}
                        </span>
                        <div className='task-info'>
                            <span className='action-icon' onClick={() => handleEdit(task.id)}><i className='fas fa-pencil-alt'></i></span>
                            <span className='action-icon' onClick={() => handleDelete(task.id)}><i className='fas fa-trash-alt'></i></span> 
                            <div className='date-wrapper'>
                                <span className='date'> <i className='fas fa-info-circle me-2'></i> 
                                    28th Jun 2020
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <span className='completed'>Completed</span> */}
                </div>
                {/* end of single todo */}
    </>
  )
}

export default Task