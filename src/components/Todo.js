import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../components/Todo.css'
import { addTodoData, setFilterData, setInputField } from '../store/task-actions';
import Task from './Task';

function Todo() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks)
    const handleSubmit = () => dispatch(addTodoData(tasks))
    const handleInputField = (e) => dispatch(setInputField(e))
    const handleFilter = (e) => dispatch(setFilterData(e))
    // const handleSubmit = () => {
    //     dispatch(tasksAction.addTask({
    //         task: tasks.inputTask
    //     }))
    // } 
    // const handleInputField = (e) => {
    //     dispatch(tasksAction.inputChange({
    //         task: e.target.value
    //     }))
    // }
    // const handleFilter = (e) => {
    //     dispatch(tasksAction.filterBy({
    //         isTaskCompleted: e.target.value 
    //     }))
    // }
    // console.log(tasks)
  return (
    <div className='todo-wrapper'>
        <div className='todo-container'>
            <div className="hero">
                <span className='check-icon'><i className='fas fa-check-square'></i></span>
                <h3 className='title'>My Todo-s</h3>    
            </div>
            <div className='new-todo-form'>
                <div className='search'>
                    <input type='text' 
                    name='task' 
                    value={tasks.inputTask}
                    onChange={(e) => handleInputField(e)} 
                    placeholder="Add new..." 
                    />
                    <div className='add-new-task'>
                        <span className='calender-icon'>
                            {/* <input type='date' /> */}
                            <i className='fas fa-calendar-alt fa-lg me-3'></i>    
                        </span>
                        <button className='btn' onClick={handleSubmit}>
                            {!tasks.editing ? 'Add' : 'Update'}
                         </button>
                    </div>
                </div>
            </div>
            <hr className='divider'/>
            <div className='filter-wrapper'>
                <div className='filter-group'>
                    <label>Filter </label>
                    <select onChange={(e) => handleFilter(e)}>
                        <option value='All'>All</option>
                        <option value='Completed'> Completed</option>
                        <option value='Active'>Active</option>
                    </select>
                </div>
                <div className='filter-group'>
                    <label>Sort </label>
                    <select>
                        <option>Added date</option>
                        <option>Due date</option>
                    </select>
                </div>
            </div>
            <div className='todos'>
                { tasks.tasks.length === 0 && (
                    <div className='no-record'>
                        <h2>No Record Found</h2>
                    </div>
                ) }
                {tasks.filteredTask && tasks.filteredTask.length === 0 && tasks.tasks.length !== 0 && (
                    <div className='no-record'>
                        <h2>No Record Found</h2>
                    </div>
                ) }
                { tasks && !tasks.filteredTask &&
                    tasks.tasks.map((item)=> (
                        <Task task={item} key={item.id}/>
                        
                    ))
                }
                {/* show filtered task */}
                {
                    tasks.filteredTask &&
                    tasks.filteredTask.map((item)=> (
                        <Task task={item} key={item.id}/>
                        
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Todo