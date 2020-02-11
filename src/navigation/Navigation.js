import React, {Component} from 'react'
import {
    HOME,
    SAT,
    GRE,
    Biology,
    Chemistry,
    Physic,
    Botany,
    Zoology,
    Microbiology,
    OrganicChemistry,
    Biochemistry
    } from '../constant/PageConstant.js'
// import ToggleButton from 'react-bootstrap/ToggleButton'
import {Link} from 'react-router-dom';


class Navigation extends Component {
    state={
        page:HOME,
        card:"Card",
        list:"List"
    }
    // handleState=(word, key)={
    //     this.setState({

    //     })
    // }
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
            card: e,
            list:"List"
        })               
    }
    setList=(e)=>{                        
        this.props.setCard(e)
        this.setState({
            list: e,
            card:"Card"
        })
               
    }

    render(){
        console.log(this.state)
        return(            
                <nav className={"navbar navbar-expand-md navbar-light bg-light sticky-top"}>
                    <Link to="/" className={"navbar-brand"}>FlashWords</Link>
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
                                        <Link to="lists" onClick={()=>this.setList(SAT)} className="nav-link">SAT</Link>
                                        <Link to="lists" onClick={()=>this.setList(GRE)} className="nav-link">GRE</Link>                                        
                                        <Link to="lists" onClick={()=>this.setList(Biology)} className="nav-link">Biology</Link>
                                        <Link to="lists" onClick={()=>this.setList(Chemistry)} className="nav-link">Chemistry</Link>
                                        <Link to="lists" onClick={()=>this.setList(Physic)} className="nav-link">Physic</Link>
                                        <Link to="lists" onClick={()=>this.setList(Botany)} className="nav-link">Botany</Link>
                                        <Link to="lists" onClick={()=>this.setList(Zoology)} className="nav-link">Zoology</Link>
                                        <Link to="lists" onClick={()=>this.setList(Microbiology)} className="nav-link">Microbiology</Link>
                                        <Link to="lists" onClick={()=>this.setList(OrganicChemistry)} className="nav-link">Organic Chemistry</Link>
                                        <Link to="lists" onClick={()=>this.setList(Biochemistry)} className="nav-link">Biochemistry</Link>
                                    </div>
                                </div>                                
                            </li>
                            <li className={"nav-item"}> 
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.card}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <Link to="cards" onClick={()=>this.setCard(SAT)} className="nav-link">SAT</Link>
                                        <Link to="cards" onClick={()=>this.setCard(GRE)} className="nav-link">GRE</Link>                                        
                                        <Link to="cards" onClick={()=>this.setCard(Biology)} className="nav-link">Biology</Link>
                                        <Link to="cards" onClick={()=>this.setCard(Chemistry)} className="nav-link">Chemistry</Link>
                                        <Link to="cards" onClick={()=>this.setCard(Physic)} className="nav-link">Physic</Link>
                                        <Link to="cards" onClick={()=>this.setCard(Botany)} className="nav-link">Botany</Link>
                                        <Link to="cards" onClick={()=>this.setCard(Zoology)} className="nav-link">Zoology</Link>
                                        <Link to="cards" onClick={()=>this.setCard(Microbiology)} className="nav-link">Microbiology</Link>
                                        <Link to="cards" onClick={()=>this.setCard(OrganicChemistry)} className="nav-link">Organic Chemistry</Link>
                                        <Link to="cards" onClick={()=>this.setCard(Biochemistry)} className="nav-link">Biochemistry</Link>
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
        )
    }
}

export default Navigation