import React , {Component} from 'react'
import TeamMember from '../components/TeamMember'
class TeamContainer extends Component {
    render(){
        return(
            <>
                <div className={"container-fluid padding"}>
                    <div className={"row welcome text-center"} style={{margin:"auto"}}>
                        <div className={"col-12"}>
                            <h1 className={"display-4"}>Meet the team</h1>
                        </div>
                        <hr/>                      
                    </div>                
                </div>
                <div className={"container-fluid padding"}>
                    <div className={"row padding"}>
                    
                        <TeamMember/>
                        <TeamMember/>
                        <TeamMember/>        
                        
                    </div>
                </div>
                {/*
                    <hr className={"my-4"}/> 
                */}
                
            </>
        )
    }
}
export default TeamContainer