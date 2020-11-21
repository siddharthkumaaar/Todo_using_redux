import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {logOut} from '../Redux/actions'
import { connect } from 'react-redux'

class NavBar extends Component{

    render(){
        const {isAuth,logOut} = this.props

        if(isAuth===true)
        {
            return(

                <>
                    <div style={{height:50,backgroundColor:"gray",color:"white",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                        <Link style={{textDecoration:"none",color:"white",padding:15}} to="/">Login</Link>
                        <Link style={{textDecoration:"none",color:"white", padding:15}} to="/dashboard">Dashboard</Link>
                        <Link style={{textDecoration:"none",color:"white",padding:15}} to="/"><button onClick={()=>{logOut(false)}}>Log Out</button> </Link>
                    </div>
                </>
            )    
        }
        else
        {
            return(
    
                <>
                    <div style={{height:50,backgroundColor:"gray",color:"white",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                        <Link style={{textDecoration:"none",color:"white",padding:15}} to="/">Login</Link>
                        <Link style={{textDecoration:"none",color:"white", padding:15}} to="/dashboard">Dashboard</Link>
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = state =>({
    isAuth:state.auth.isAuth
})

const mapDispatchToProps = dispatch =>({
    logOut:payload=> dispatch(logOut(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)