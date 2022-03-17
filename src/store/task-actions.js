import { tasksAction } from "./tasks-slice"


export const addTodoData = (tasks) => {
    return (dispatch) => {
        dispatch(tasksAction.addTask({
            task: tasks.inputTask
        }))
    }
}

export const setInputField = (e) => {
    return (dispatch) => {
        dispatch(tasksAction.inputChange({
            task: e.target.value
        }))
    }
}

export const setFilterData = (e) => {
    return (dispatch) => {
        dispatch(tasksAction.filterBy({
            isTaskCompleted: e.target.value 
        }))
    }
}

export const setTaskAsCompleted = (e,id) => {
    return (dispatch) => {
        var isTaskCompleted = e.target.checked
        dispatch(tasksAction.taskCompleted({
            id: id,
            isTaskCompleted: isTaskCompleted
        }))
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        dispatch(tasksAction.removeTask({ id: id }))
    }
}

export const editTask = (id) => {
    return (dispatch) => {
        dispatch(tasksAction.editTask({
            id: id
        }))
    }
}
