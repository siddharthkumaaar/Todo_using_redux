import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTask,deleteTask,completeTask} from '../Redux/actions'
import styled from './Todo.module.css'
import Total from './Total';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }

    handleTask = (e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        console.log(this.state)
        console.log(this.props)
        const { todoTask,addTask,deleteTask,completeTask,isAuth} = this.props

        if(isAuth===false){

            return(
                <>
                    <h1>Please Login To See Your Dash Board</h1>
                </>
            )
        }
        else
        {
        return(
                <>
                <Total />
                <h1>Todo</h1>
                <div>
                    <input id={styled.inp_field} type="text" name="task" 
                    value={this.state.value} 
                    onChange={this.handleTask}
                    placeholder="Write Your Task"/>
                    <button id={styled.btn1} onClick={()=>{
                        addTask(this.state.value)
                        }}
                        >
                            Add Task
                    </button>
                </div>
                <hr></hr>
                <div id={styled.main_div}>
                    {todoTask && todoTask.map(item=>
                        <div id={styled.div_elem} key={item.id}>
                            <p>{item.title}</p>
                            <br></br>
                            {item.status===false ?
                                <button onClick={()=>{completeTask(item.id)}}>Complete</button>:
                                <p>Completed</p>
                            }
                            <button onClick={()=>{deleteTask(item.id)}}>Delete</button>
                            
                        </div>
                    )}
                </div>
                </>
            )
        }
    }

}

const mapStateToProps = state => ({
    todoTask: state.app.todoTask,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => ({
    addTask: payload => dispatch(addTask(payload)),
    deleteTask: payload => dispatch(deleteTask(payload)),
    completeTask:payload => dispatch(completeTask(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo)

// export default Todo