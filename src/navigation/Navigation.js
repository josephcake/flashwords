import React, {Component} from 'react'
import {HOME} from '../constant/PageConstant.js'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import {Link} from 'react-router-dom';


class Navigation extends Component {
    state={
        page:HOME,
        card:"Card",
        list:"List"
    }
    setPage=(e)=>{
        this.setState({
            page: e,
            card: "Card",
            list: "List"
        })
    }
    setCard=(e)=>{                
        this.props.setCard(e)        
        this.setState({
            card: e
        })               
    }
    setList=(e)=>{                
        
        this.setState({
            list: e
        })       
    }

    render(){
        console.log(this.state)
        return(
            <>
                <nav className={"navbar navbar-expand-md navbar-light bg-light sticky-top"}>
                    <a href="#" className={"navbar-brand"}>FlashWords</a>
                    <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#navbar-menu"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div id="navbar-menu"className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item"}> 
                                <Link to="/" onClick={()=>this.setPage(HOME)} className="nav-link">HOME</Link>
                            </li>
                            <li className={"nav-item"}> 
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.list}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <Link to="cards" onClick={()=>this.setList("sat")} className="nav-link">SAT</Link>
                                        <Link to="cards" onClick={()=>this.setList("gre")} className="nav-link">GRE</Link>                                        
                                        <Link to="cards" onClick={()=>this.setList("biology")} className="nav-link">Biology</Link>
                                        <Link to="cards" onClick={()=>this.setList("chemistry")} className="nav-link">Chemistry</Link>
                                        <Link to="cards" onClick={()=>this.setList("physic")} className="nav-link">Physic</Link>
                                    </div>
                                </div>                                
                            </li>
                            <li className={"nav-item"}> 
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.card}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <Link to="cards" onClick={()=>this.setCard("sat")} className="nav-link">SAT</Link>
                                        <Link to="cards" onClick={()=>this.setCard("gre")} className="nav-link">GRE</Link>                                        
                                        <Link to="cards" onClick={()=>this.setCard("biology")} className="nav-link">Biology</Link>
                                        <Link to="cards" onClick={()=>this.setCard("chemistry")} className="nav-link">Chemistry</Link>
                                        <Link to="cards" onClick={()=>this.setCard("physic")} className="nav-link">Physic</Link>
                                    </div>
                                </div>                                
                            </li>
                            
                            <li className={"nav-item"}> 
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My Words
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <Link to="mywords" className="nav-link">MY WORDS</Link>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>                                                                                            
                            </li>
                            <li className={"nav-item"}> <Link to="/" className="nav-link">TEST</Link></li>
                        </ul>
                    </div>
                    
                </nav>
            </>
        )
    }
}

export default Navigation