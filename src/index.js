import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//para visualizar el logo:
import logo from './logo.svg';
import Card from './components/Cards'

//import librerias bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const user = {
  firstname: 'Sebastián Andrés',
  lastname: 'Sánchez Aránguiz',
  avatar: 'https://arata.lat/wp-content/uploads/2018/05/xChallenge-special-armor.png' 
}

function getName(user){
  return `${user.firstname} ${user.lastname}`
}

function getGreenting(user)
{
  if(user){
  <h1>Hello { getName(user) }</h1>
  }
}

const element =( 
  <div> 
    <div className="App-header"></div>
    <img src={logo} className="App-logo" alt="logo" height="20%" width="20%"/> 
    <br />
    <h2>Mi nombre es: {user.firstname + " " + user.lastname} </h2>
    <br /> 
    <img src={user.avatar} alt="Rockman X" height="30%" width="30%" />

    <button id="btnAceptar" class ="btn btn-success">Aceptar</button>
  </div>
  )

  const container = document.getElementById('root'); 

//ReactDOM.render(__que__,__donde__)

//ReactDOM.render(element,container);

//ReactDOM.render(<Card/>, container)

/* ejemplo de como mandar mas propiedades a un componente*/
ReactDOM.render(<Card
                    title="Technique Guides"
                    description="Learn amazing street travel"
                    img=""
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />, container)
