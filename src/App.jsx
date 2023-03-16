import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import StudentCardForm from './components/form/studentCardForm'
import StudentCard from './components/studentCard'

function App() {
    return (
        <div className="container">
            <Switch>
                <Route path="/edit" component={StudentCardForm} />
                <Route path="/create" component={StudentCardForm} />
                <Route path="/" exact component={StudentCard} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
