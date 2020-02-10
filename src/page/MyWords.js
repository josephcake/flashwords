import React from 'react'
import Card from '../components/Card.js'

class MyWords extends React.Component {
    renderCards =()=>{             
        return this.props.myWords.map((element) => {
            return <Card key={element.word} added={true} item={element} removeFromWords={this.props.removeFromWords}/>
        });
    }
    render(){        
        return (
            <div className="container-fluid" style={{minHeight:"max-content"}}>
                <div className={"row"}>
                    {this.renderCards()}
                </div>                
            </div>
        )
    }
    
}
export default MyWords