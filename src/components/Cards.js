import React from 'react'
import cardImg from '../images/kjhgfd_2048x.jpg'

class Card extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src ={cardImg} />
                </div>
                <div>
                    <h1> Cards </h1>
                    <p>travels cards</p>
                </div>
            </div>
            )
    }
}
export default Card
