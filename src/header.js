import React from "react"
import './header.css'
import godigitlogo from './assets/images/godigitlogo.png'
class header extends React.Component {
    render(){
        return(
            <header>
                <div className="logo">
                    
                    <img src={godigitlogo} alt="logo"></img>
                </div>
            </header>
        )
    }
}
export default header