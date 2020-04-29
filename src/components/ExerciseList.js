import React from 'react'
import Card from './Card'

function ExerciseList(props){
    return(
        <div>
            { props.exercises.map((exercises) => {
                    return(
                        <Card
                            title={exercises.title}
                            description={exercises.description}
                            img={exercises.img}
                            leftColor={exercises.leftColor}
                            rightColor={exercises.rightColor}
                        />)
                })
            }
        </div>
    )
}

export default ExerciseList