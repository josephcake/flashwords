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
                        this.props.currentCard
                        ?
                        this.renderCards()
                        :
                        <>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                            <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        </>
                    }
                </div>                                
            </div>
        )
    }
    
}
export default CardContainer