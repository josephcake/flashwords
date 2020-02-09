import React, {Component} from 'react'

class InfoContainer extends Component{
    render(){
        return(
            <div className={"container-fluid"}>
                <div className={"row jumbotron"}>
                    <div className={"col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10"}>
                        <p className={"lead"}>
                            Lorem ipsum bacon lemon food durian popeyes chicken boba brown sugar 
                        </p>
                    </div>
                    <div className={"col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2"}>
                        <a href={"#"}>
                            <button type={"button"} className={"btn btn-outline-secondary"}>Food</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoContainer