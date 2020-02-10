import React, {Component} from 'react'

class ConnectContainer extends Component {
    render(){
        return(
            <div className={"container-fluid padding"}>
                <div className={"connect-social row text-center padding"} style={{marginLeft:"0", marginRight:"0"}}>
                    <div className={"col-12"}>
                        <h2 className={"display-4"}>Connect</h2>
                    </div>
                    <hr/>
                    <div className={"col-12 social padding"}>
                        <a href={"#"}><i className={"fab fa-facebook"}/></a>
                        <a href={"#"}><i className={"fab fa-twitter"}/></a>
                        <a href={"#"}><i className={"fab fa-google-plus-g"}/></a>
                        <a href={"#"}><i className={"fab fa-instagram"}/></a>
                        <a href={"#"}><i className={"fab fa-youtube"}/></a>                        
                    </div>
                </div>


            </div>
        )
    }
}

export default ConnectContainer