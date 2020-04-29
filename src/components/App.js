import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExcerciseNew'


function App() {
    
    return (
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={ExercisesContainer} />
                <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            </Switch>
        </BrowserRouter>
    )
}
export default App