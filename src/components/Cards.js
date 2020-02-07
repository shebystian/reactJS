import React from 'react'
import cardImg from '../images/kjhgfd_2048x.jpg'
import './styles/Cards.css'

class Card extends React.Component{
    render(){
        return (
            <div className ="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className ="col-6">
                            <img className="float-right" src ={cardImg} style={{height:'70%', width: '70%'}}/>
                        </div>
                        <div>
                            <h1> Cards </h1>
                            <p>travels cards</p>
                        </div>
                        </div>
                    </div>
                </div>
            )
    }
}
//con esto hago que sea exportable esta clase
export default Card
