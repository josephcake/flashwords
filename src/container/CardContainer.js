import React from 'react'
import Card from '../components/Card.js'

class CardContainer extends React.Component {
    renderCards=()=>{                                     
        return this.props.currentCard.map((element) => {
            return <Card key={element.word} item={element} addToWords={this.props.addToWords}/>
        });
    }
    render(){                        
        return (
            <div className="container-fluid">

                <div className={"row"}>
                    {                    
                        this.renderCards()
                    }
                </div>                
            </div>
        )
    }
    
}
export default CardContainer