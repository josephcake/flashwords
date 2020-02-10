import React, {Component} from 'react'

class ExpressionContainer extends Component {
    render(){
        return(
            <div id={"emoji"} className={"container-fluid padding"}>
                <div className={"row text-center"}>
                    <div className={"col-xs-12 col-sm-6 col-md-3 col-lg-3"} >
                        <img className={"gif"} alt={"bear"} src={require("../image/bear.gif")} style={{width:"inherit"}}/>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-3 col-lg-3"} >
                        <img className={"gif"} alt={"chicken"} src={require("../image/chicken.gif")} style={{width:"inherit"}}/>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-3 col-lg-3"} >
                        <img className={"gif"} alt={"unicorn"} src={require("../image/unicorn.gif")} style={{width:"inherit"}}/>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-3 col-lg-3"} >
                        <img className={"gif"} alt={"fox"} src={require("../image/fox.gif")} style={{width:"inherit"}}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ExpressionContainer