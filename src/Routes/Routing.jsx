import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../component/Login'
import Todo from '../component/Todo'
// import Total from '../component/Total'

export default function Routing(){

    return(
        <>

            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Todo} />

        </>
    )
}