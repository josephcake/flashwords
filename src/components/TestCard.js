import React, {Component} from 'react'

class TestCard extends Component{
    render(){
        const {item} = this.props
        return(
            <div className={"word-card col border-0 my-2  text-center col-12 col-sm-12 col-md-6 col-lg-4 mx-auto offset-lg-3"}>                
                <div className={"flip-card bg-light align-items-center shadow rounded"}>                                        
                    <div className="flip-card-inner" data-card={"card"}>                        
                        <div className="flip-card-back word-definition">
                            {item.definition}
                        </div>
                    </div>                                    
                </div>                
            </div>
        )
    }
}

export default TestCard