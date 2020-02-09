import React from 'react'
// import { render } from '@testing-library/react'

class Card extends React.Component{
    state={
        flipped:false,
    }

    flip=(e)=>{
        console.log(e.currentTarget.dataset.card)
        if(e.currentTarget.dataset.card === "card"){
            this.setState({
                flipped:!this.state.flipped
            })
        }        
    }
    addToWords=(e)=>{        
        this.props.addToWords(e)
    }

    render(){
        const {item} = this.props
        return (            
            <div className={"card col border-0 my-2 bg-white text-center col-12 col-sm-12 col-md-6 col-lg-4 mx-auto offset-lg-3"}>                
                <div className={"flip-card bg-light align-items-center shadow rounded"}>                    
                    <button onClick={()=>this.addToWords(item)} type="button" data-card={"add"} className="close ml add-to-word" aria-label="Close">
                        {
                            this.props.added
                            ?
                            <span aria-hidden="true">x</span>
                            :
                            <span aria-hidden="true">+</span>
                        }

                    </button>
                    <div className="flip-card-inner" data-card={"card"} onClick={this.flip}>
                        {
                            this.state.flipped                    
                            ?                    
                            <div className="flip-card-back">
                                {item.definition}
                            </div>
                            :                        
                            <div className="flip-card-front">
                                {item.word}
                            </div>             
                        }                                                        
                    </div>                                    
                </div>                
            </div>
        )
    }
}
export default Card