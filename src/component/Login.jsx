import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import {logIn,logOut} from '../Redux/actions'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            uname:"",
            pword:""
        }
    }

    handleChange = (e)=>{
        const {name,value} = e.target
        
        this.setState({
            [name]:value
        })
    }

      
    render(){
        const {logIn} = this.props
        // console.log(logIn)
        const {uname,pword} = this.state
        return(

            <div>
                <div style={{width:300,height:200,backgroundColor:"skyblue",margin:"auto",marginTop:20}}>
                    <div style={{padding:10}}>
                        <label htmlFor="uname">User Name:</label>
                        <input type="text" name="uname" value={this.state.uname} onChange={this.handleChange}/>
                    </div>
                    <div style={{padding:10}}>
                        <label htmlFor="pword">Password:</label>
                        <input type="password" name="pword" value={this.state.pword} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button onClick={()=>{
                           if(uname==="admin" && pword==="admin")
                           {
                            logIn(true)
                           }

                        }}>
                            
                            Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})

const mapDispatchToProps = dispatch =>({
    logIn: payload => dispatch(logIn(payload)),
    logOut: payload => dispatch(logOut(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)