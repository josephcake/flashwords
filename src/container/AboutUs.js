import React,{Component} from 'react'


class AboutUs extends Component {
    render(){
        return(
            <div className={"container-fluid padding "} >
                <div className={"row padding"}>
                    <div className={"col-lg-8"} style={{margin:"auto"}}>
                        <h2 className={"display-1"} style={{margin:"auto", width:"fit-content", color:"#480f4d"}}>About Us</h2>
                        <p className={"lead"} style={{margin:"auto", width:"fit-content"}}>We built this since ONE, yes, just ONE of us needed this to study for an exam.</p>
                        <p className={"lead"} style={{margin:"auto", width:"fit-content"}}>While the other (the one writing this message) is using this to hopefully land a job.</p>
                        <br/>
                    </div>
                    <div className={"col-lg-4"}>
                        <img atl={"Us"} src={require("../image/poo.gif")} style={{width:"inherit"}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs