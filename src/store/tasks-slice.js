import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: { 
        tasks: [],
        inputTask: '',
        filteredTask: null,
        editing: false,
        editingTaskID: null
    },
    reducers: {
        addTask(state, action){
            let uid = (Math.random() + 1).toString(36).substring(7);
            if(!state.editing && action.payload.task){
                state.tasks.push({
                    id: uid,
                    task: action.payload.task,
                    taskCompleted: false
                })
            }
            if(state.editing && state.inputTask){
                var foundTask = state.tasks.find((task) => task.id === state.editingTaskID)
                foundTask.task = state.inputTask
            }
            (state.editing === false && state.inputTask) && state.tasks.reverse()
            state.inputTask = ''
            state.editing = false
        },
        inputChange(state, action){
            state.inputTask = action.payload.task
        },
        removeTask(state, action){
            // console.log(action.payload.id)
            let newTasks = state.tasks.filter((f) => f.id !== action.payload.id)
            state.tasks = newTasks
            state.editing = false
        },
        taskCompleted(state, action){
            var foundTask = state.tasks.find((task) => task.id === action.payload.id)
            action.payload.isTaskCompleted ? foundTask.taskCompleted = true : foundTask.taskCompleted = false
        },
        filterBy(state, action){
            let filteredTask
            if(action.payload.isTaskCompleted === 'Completed'){
                filteredTask = state.tasks.filter(f => f.taskCompleted === true )
            }
            if(action.payload.isTaskCompleted === 'Active'){
                filteredTask = state.tasks.filter(f => f.taskCompleted === false )
            }
            if(action.payload.isTaskCompleted === 'All'){
                filteredTask = null
            }
            state.filteredTask = filteredTask
            state.editing = false
        },
        editTask(state, action){
            var foundTask = state.tasks.find((task) => task.id === action.payload.id)
            state.inputTask = foundTask.task
            state.editing = true
            // foundTask.task = 'This is my edited task'
            state.editingTaskID = action.payload.id 
        }
    }
})

export const tasksAction = taskSlice.actions
export default taskSlice