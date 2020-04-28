import React from 'react'
import cardImg from '../images/kjhgfd_2048x.jpg'
import circlesImg from '../images/circles.png'
import './styles/Cards.css'

class Card extends React.Component{
    render(){
        //C) ahora si quiero parametrizar las propiedades
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className ="card mx-auto Fitness-Card"
            /* aca nos traemos la propiedad de css que esta en cards.js como ejemplo de estilos en linea*/ 
            style={{
                //A) /*ej sin props */
                //A) //backgroundImage: `url(${circlesImg}), linear-gradient(to right, #A74CF2, #617BFB)`
                //B) /* ej colores con props :    //uso de props que reemplazan los textos o propiedades de manera dinamica */
                //B) backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
                //C)
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className ="col-6">
                            <img className="float-right" src ={cardImg} style={{height:'70%', width: '70%'}}/>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <p>{description}</p>
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
