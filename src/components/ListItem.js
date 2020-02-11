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
        const {item, added, idx} = this.props
        return (            
            <tr className={"list-row"}>
                <th scope="row">
                    {idx}
                </th>
                <td className={"word-title"}>
                    {item.word}
                </td>
                <td>
                    {item.definition}
                </td>
                <td >
                    <button onClick={()=>this.props.addToWords(item)} type="button" data-card={"add"} className="close ml list-button" aria-label="Close">                            
                            <span aria-hidden="true">+</span>                            
                    </button>
                </td>
            </tr>
        )
    }
}
export default ListItem

{/* <div className={"word-card col border-0 my-2  text-center col-12 col-sm-12 col-md-6 col-lg-4 mx-auto offset-lg-3"}>                
                <div>
                    {item.word}    
                </div>       
                <div>
                    {item.definition}    
                </div>                
            </div> */}