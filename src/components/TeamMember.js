import React , {Component} from 'react'

class TeamMember extends Component {
    render(){
        return(
            
            <div className={"col-md-4"}>
                <div className={"card"}>
                    <img className={"card-imd-top"} src={require("../image/chicken.gif")} style={{width:"100%"}}/>
                    <div className={"card-body"}>
                        <h4 className={"card-title"}>Jackson Chen</h4>
                        <p className={"card-text"}>Only part of this project was the fact that he needed this to study</p>
                        <a href="#" className={"btn btn-outline-secondary"}>See Profile</a>
                    </div>
                </div>
            </div>                
            
        )
    }
}
export default TeamMember