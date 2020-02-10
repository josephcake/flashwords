import React, {Component} from 'react'

class WelcomeContainer extends Component {
    render(){
        return (
            <div className={"container-fluid padding"}>
                <div className={"row welcome text-center"} style={{margin:"auto"}}>
                    <div className={"col-12"}>
                        <h1 className={"display-4"}>Built with laziness</h1>
                    </div>
                    <hr/>
                    <div className={"col-12"}>
                        <p className={"lead"}>
                            Welcome to Flashwords. A free digital flashcard system to help you study up on your GRE, MCAT, SAT, DAT, or any other words.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default WelcomeContainer