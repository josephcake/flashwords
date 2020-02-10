import React from 'react'
// import { render } from '@testing-library/react'

class ListItem extends React.Component{
    // state={
    //     flipped:false,
    // }

    // flip=(e)=>{
    //     console.log(e.currentTarget.dataset.card)
    //     if(e.currentTarget.dataset.card === "card"){
    //         this.setState({
    //             flipped:!this.state.flipped
    //         })
    //     }        
    // }    
    // handleAddRemove=(word, added)=>{
    //     if(added){
    //         this.props.removeFromWords(word)
    //     }else{
    //         this.props.addToWords(word)
    //     }

    // }

    render(){
        const {item, added} = this.props
        return (            
            <div className={"word-card col border-0 my-2  text-center col-12 col-sm-12 col-md-6 col-lg-4 mx-auto offset-lg-3"}>                
                <div>
                    {item.word}    
                </div>       
                <div>
                    {item.definition}    
                </div>                
            </div>
        )
    }
}
export default ListItem