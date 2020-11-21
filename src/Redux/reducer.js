import {ADD_TASK,DELETE_TASK,COMPLETE_TASK} from './actionTypes'
import { loadData, saveData } from './localStorage'

let lengthOfTask = loadData("tasks")? loadData("tasks").length: 0
let arrOfTask = loadData("tasks")
let lenOfComTask = 0
let lenOfNonComTask = 0
for(let i=0; i<lengthOfTask; i++)
            {
                if(arrOfTask[i].status===true)
                {
                    lenOfComTask++
                }
                else
                {
                    lenOfNonComTask++
                }
            }
export const initState = {
    todoTask: loadData("tasks") || [],
    totalItems:lengthOfTask,
    completedItems:lenOfComTask,
    nonCompleted:lenOfNonComTask
}
export default (state = initState,action) => {
               
    switch(action.type)
    {
       
        case ADD_TASK:
            let dataToBeAddInTodoTask = [...state.todoTask,action.payload]
            saveData("tasks",dataToBeAddInTodoTask)
            return{
                ...state,
                todoTask: dataToBeAddInTodoTask,
                totalItems: dataToBeAddInTodoTask.length,
                nonCompleted: dataToBeAddInTodoTask.length
            }

        case DELETE_TASK:
            let tempArrOfTodoTask = [...state.todoTask]
            let arrOfRemainingItemAfterDeletion = tempArrOfTodoTask.filter((item)=>item.id!==action.payload)
            saveData("tasks",arrOfRemainingItemAfterDeletion)
            let countForCompletedItem = 0
            let  countForNonCompleted = 0
            let lengthOfTodoTask = arrOfRemainingItemAfterDeletion.length
            for(let i=0; i<lengthOfTodoTask; i++)
            {
                if(arrOfRemainingItemAfterDeletion[i].status===true)
                {
                    countForCompletedItem++
                }
                else
                {
                    countForNonCompleted++
                }
            }
            return{
                ...state,
                todoTask:[...arrOfRemainingItemAfterDeletion],
                totalItems: lengthOfTodoTask,
                completedItems:  countForCompletedItem,
                nonCompleted:  countForNonCompleted
            }

        case COMPLETE_TASK:
            const abc = (item)=>{
                if(item.id===action.payload)
                {
                    item.status=true
                }
                return item
            }
            let tempArrForCompleteTask = [...state.todoTask]
            let res = tempArrForCompleteTask.map(abc)
            saveData("tasks",res)
            let totalCompletedItem = 0
            let totalNonCompletedItem = 0
            for(let j=0; j<tempArrForCompleteTask.length; j++)
            {
                if(tempArrForCompleteTask[j].status===true)
                {
                    totalCompletedItem++
                }
                else
                {
                    totalNonCompletedItem++
                }
            }
            
            return{
                ...state,
                todoTask:res,
                completedItems: totalCompletedItem,
                nonCompleted: totalNonCompletedItem
            }

        default:
            return state

    }
}