import {ADD_TASK,DELETE_TASK,COMPLETE_TASK, LOG_IN, LOG_OUT} from './actionTypes'
import {v4 as uuid} from 'uuid'


export const addTask = (payload) => ({
    type:ADD_TASK,
    payload :{
        id:uuid(),
        title:payload,
        status:false
    }
})

export const deleteTask = payload =>({
    type:DELETE_TASK,
    payload
})

export const completeTask = payload =>({
    type:COMPLETE_TASK,
    payload
})

export const logIn = payload =>({
    type:LOG_IN,
    payload
})

export const logOut = payload =>({
    type:LOG_OUT,
    payload
})

