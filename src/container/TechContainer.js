import React, {Component} from 'react'

class TechContainer extends Component {
    render(){
        return(
            <div className={"container-fluid padding"}>
                <div className={"row padding text-center"}>
                    <div className={"col-sx-12 col-sm-6 col-md-4 "}>
                        <i className={"fas fa-code"}></i>
                        <h3>HTML5</h3>                        
                    </div>
                    <div className={"col-sx-12 col-sm-6 col-md-4 "}>
                        <i className={"fas fa-bold"}></i>
                        <h3>Bootstrap</h3>                        
                    </div>
                    <div className={"col-sx-12 col-sm-6 col-md-4 "}>
                        <i className={"fab fa-react"}></i>
                        <h3>React</h3>                        
                    </div>
                </div>
                <hr className={"my-4"}/>
            </div>
        )
    }
}
export default TechContainer