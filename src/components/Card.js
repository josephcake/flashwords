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
    handleAddRemove=(word, added)=>{
        if(added){
            this.props.removeFromWords(word)
        }else{
            this.props.addToWords(word)
        }

    }

    render(){
        const {item, added, dummy} = this.props
        return (            
            <div className={"word-card col border-0 my-2  text-center col-12 col-sm-12 col-md-6 col-lg-4 mx-auto offset-lg-3"}>                
                <div className={"flip-card bg-light align-items-center shadow rounded"}>
                    {
                        dummy
                        ?
                        null
                        :
                        <button onClick={()=>this.handleAddRemove(item,added)} type="button" data-card={"add"} className="close ml add-to-word" aria-label="Close">
                            {
                                added
                                ?
                                <span aria-hidden="true" style={{color:"tomato"}}>x</span>
                                :
                                <span aria-hidden="true">+</span>
                            }
                        </button>
                    }
                    
                    <div className="flip-card-inner" data-card={"card"} onClick={this.flip}>
                        {
                            this.state.flipped                    
                            ?                    
                            <div className="flip-card-back">
                                {item.definition}
                            </div>
                            :                        
                            <div className="flip-card-front word-title">
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