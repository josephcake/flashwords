import React from 'react'
import Card from '../components/Card.js'
import data from '../data.json'

class CardContainer extends React.Component {
    state = {
        cards : data,        
    }

    renderCards =()=>{             
        return this.state.cards.map((element) => {
            return <Card key={element.word} item={element} addToWords={this.props.addToWords}/>
        });
    }
    render(){        
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    {this.renderCards()}
                </div>                
            </div>
        )
    }
    
}
export default CardContainer