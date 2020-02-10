import React, {Component} from 'react'
import Card from '../components/Card'
class FixedBackgroundContainer extends Component {
    render(){
        const img = "../image/grand-canyon.jpeg"
        return(
            <figure style={{height:"auto"}}>
                <div className={"fixed-wrap"}>
                    <div id={"fixed"}>            
                        <div className={"container-fluid"} style={{background:"transparent", margin:"auto"}}>
                            <div className={"row padding"} style={{background:"transparent"}}>                                                            
                                <Card dummy={true} item={{word:"GRE", definition:"Some exam"}}/>
                                <Card dummy={true} item={{word:"GRE", definition:"Some exam"}}/>
                                <Card dummy={true} item={{word:"GRE", definition:"Some exam"}}/> 
                            </div>
                        </div>              
                    </div>
                </div>
            </figure>
        )
    }
}
export default FixedBackgroundContainer