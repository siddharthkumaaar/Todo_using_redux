import {LOG_IN,LOG_OUT} from './actionTypes'
import { loadData, saveData } from './localStorage'

export const initState = {
    isAuth: loadData("permission") || ""
}

export default (state = initState,action) => {

    switch(action.type){

        case LOG_IN:
            // console.log(action.payload)
            saveData("permission",action.payload)
            return{
                ...state,
                isAuth: action.payload
            }

        case LOG_OUT:
            saveData("permission",action.payload)
            return{
                ...state,
                isAuth: false
            }
        default:
            return state
     }
}