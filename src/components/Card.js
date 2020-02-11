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
    play=(link)=>{
        console.log(link)
        let audio = link[0].hwi.prs[0].sound.audio
        let audioLink = new Audio(`https://media.merriam-webster.com/soundc11/${audio[0]}/${audio}.wav`);
        console.log(audioLink)
        audioLink.play();        
    }
    listen=(word)=>{        
        fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=0c23a8bd-5b0d-40ce-9746-50265f69fda8`)
        .then(res=>res.json())
        .then(resp => {
            return this.play(resp)
        })
        // console.log(temp)
        // console.log(temp.hwi.prs[0].sound.audio)
        // let sound = temp[0].hwi.prs[0].sound.audio
        // https://media.merriam-webster.com/soundc11/a/amine002.wav
    }

    render(){
        const {item, added, dummy} = this.props
        return (            
            <div className={"word-card col border-0 my-2  text-center col-12 col-sm-12 col-md-6 col-lg-4 mx-auto offset-lg-3"}>
                
                <div className={"flip-card bg-light align-items-center shadow rounded"}>
                <button type={"button"} onClick={()=>this.listen(item.word)}className={"btn btn-sm btn-success listen-left"}>Listen</button>
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