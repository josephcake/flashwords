import React, {Component} from 'react'
import {HOME} from '../constant/PageConstant.js'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import {Link} from 'react-router-dom';


class Navigation extends Component {
    state={
        page:HOME,
    }
    render(){
        console.log(HOME)
        return(
            <>
                <nav className={"navbar navbar-expand-sm navbar-dark bg-dark sticky-top"}>
                    <a href="#" className={"navbar-brand"}>FlashWords</a>
                    <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#navbar-menu"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div id="navbar-menu"className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item"}> <Link to="/" className="nav-link">HOME</Link></li>
                            <li className={"nav-item"}> <Link to="cards" className="nav-link">CARDS</Link></li>
                            <li className={"nav-item"}> <Link to="mywords" className="nav-link">MY WORDS</Link></li>
                            <li className={"nav-item"}> <Link to="/" className="nav-link">TEST</Link></li>
                        </ul>
                    </div>
                    
                </nav>
            </>
        )
    }
}

export default Navigation