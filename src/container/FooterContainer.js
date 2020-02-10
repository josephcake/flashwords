import React, {Component} from 'react'

class FooterContainer extends Component {
    render(){
        return(
            <footer>
                <div id={"footer-container-fluid"}className={"container-fluid padding"}>
                    <div className={"row text-center"}>                        
                        <div className={"col-md-4"}>
                            <hr className={"light"}/>
                            <h5>Contact US</h5>
                            <hr className={"light"}/>
                            <p>Phone Number</p>
                            <p>E-Mail</p>
                            <p>Street Address</p>
                            <p>City Address</p>                            
                        </div>
                        <div className={"col-md-4"}>
                            <hr className={"light"}/>
                            <h5>Our Hours</h5>
                            <hr className={"light"}/>
                            <p>Monday-Friday : 9:00am - 5:00pm</p>
                            <p>Saturday : 10:00am - 5:00pm</p>
                            <p>Sunday : Close</p>                            
                        </div>
                        <div className={"col-md-4"}>
                            <hr className={"light"}/>
                            <h5>Service Area</h5>
                            <hr className={"light"}/>
                            <p>City: State: New York</p>
                            <p>City: State: New York</p>
                            <p>City: State: New York</p>
                            <p>City: State: New York</p>                            
                        </div>
                        <div className={"col-12"}>
                            <hr className={"light"} style={{width:"95%"}}/>
                            <h5>&copy; flashwords.com</h5>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterContainer