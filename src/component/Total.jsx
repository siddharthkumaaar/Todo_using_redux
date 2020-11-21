import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import styled from './Total.module.css'

class Total extends Component{

    render(){
        console.log(this.props.state.app.totalItems)
        const {totalItems,completedItems,nonCompleted} =  this.props.state.app
        return(
            <>
                <div id={styled.main_div}>
                    <div id={styled.div1}> <h2>Total Task</h2> <h3>{totalItems}</h3></div>
                    <div id={styled.div2}> <h2>Completed Task</h2> <h3>{completedItems}</h3></div>
                    <div id={styled.div3}> <h2>Non Completed Task</h2> <h3>{nonCompleted}</h3></div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>({
    state:state
    // totalItems: state.totalItems,
    // completedItems: state.completedItems,
    // nonCompleted: state.nonCompleted
})

const mapDispatchToProps = dispatch =>({
   
})

export default connect(mapStateToProps ,mapDispatchToProps)(Total)  