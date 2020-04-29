import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExcerciseNew'
import NotFound from '../pages//404'


function App() {
    
    return (
        
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={ExercisesContainer} />
                <Route exact path="/exercise/new" component={ExerciseNewContainer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default App