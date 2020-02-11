import React from 'react'
import ListItem from '../components/ListItem.js'
import Card from '../components/Card.js'

class ListContainer extends React.Component {
    renderLists=()=>{                                     
        return this.props.currentCard.map((element, i) => {
            return <ListItem key={element.word} idx={i+1}item={element} addToWords={this.props.addToWords}/>
        });
    }
    render(){                        
        return (
            <div className="container-fluid">
                {
                    this.props.currentCard
                    ?
                    <div className={"row table-list"}>
                        <div className={"col-12"}>
                            <table className={"table"}>
                                <thead>
                                    <tr className={"thead-dark"}>
                                        <th scope={"col"}>#</th>
                                        <th scope={"col"}>Word</th>
                                        <th scope={"col"}>Definition</th>
                                        <th scope={"col"}></th>
                                    </tr>
                                </thead>
                                <tbody>                        
                                {                    
                                    this.renderLists()
                                }
                                </tbody>
                            </table>
                        </div>
                    </div> 
                    :
                    <div className={"row"}>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                        <Card key={"GRE"} item={{"word":"GRE","definition":"GRE"}} dummy={true}/>
                    </div>        
                }
                     
            </div>
        )
    }
    
}
export default ListContainer