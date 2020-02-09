import React from 'react'
import Card from '../components/Card.js'

class MyWords extends React.Component {
    renderCards =()=>{             
        return this.props.myWords.map((element) => {
            return <Card key={element.word} added={true} item={element}/>
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
export default MyWords