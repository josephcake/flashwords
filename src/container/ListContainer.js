import React from 'react'
import ListItem from '../components/ListItem.js'

class ListContainer extends React.Component {
    renderLists=()=>{                                     
        return this.props.currentCard.map((element) => {
            return <ListItem key={element.word} item={element} addToWords={this.props.addToWords}/>
        });
    }
    render(){                        
        return (
            <div className="container-fluid">

                <div className={"row"}>
                    {                    
                        this.renderLists()
                    }
                </div>                
            </div>
        )
    }
    
}
export default ListContainer