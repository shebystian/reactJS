import React from 'react';
import Card from '../components/Cards';
import Welcome from '../components/Welcome'

class Exercises extends React.Component {
render(){
        return (
            <div>
            <Welcome
            username = "Seba"
            ></Welcome>
            <Card
                title="Technique Guides"
                description="Learn amazing street travel"
                img=""
                leftColor="#A74CF2"
                rightColor="#617BFB"
            />
            </div>

        )
    }
}

export default Exercises