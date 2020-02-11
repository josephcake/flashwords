import React, {Component} from 'react'
import TestCard from '../components/TestCard'

class TestContainer extends Component{
    state={
        count:0,        
        value:""
    }
    handleInput=(e)=>{
        let value = e.target.value        
        this.setState({
            value
        })
    }
    handleDirection=(e)=>{
        const direction = e.target.value
        direction === "Previous"
        ?
        this.previous()
        :
        this.next()
    }
    previous(){
        this.setState({
            count: this.state.count-1
        })
    }
    next(){
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        const {myWords} = this.props
        console.log(this.state)
        return(
            <div className={"container-fluid test-container"}>
                <div className={"row"}>                    
                        {
                            myWords.length?
                            <>
                                <TestCard item={myWords[this.state.count]}/>
                                <div className={"input-group input-group-lg"}> 
                                    
                                        <div className="input-group-prepend">
                                            <button onClick={this.handleDirection} className="btn btn-outline-secondary" value={"Previous"}type="button" style={{visibility:`${this.state.count>0?"visible":"hidden"}`}}>Previous</button>                                        
                                        </div>                                    
                                    
                                    <input type="text" className={"form-control"} aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={this.state.value} onChange={this.handleInput}/>
                                    
                                        <div className="input-group-append">                                        
                                            <button onClick={this.handleDirection} className="btn btn-outline-secondary" value={"Next"} type="button" style={{visibility:`${this.state.count === myWords.length-1?"hidden":"visible"}`}}>Next</button>
                                        </div>
                                    
                                    
                                </div>
                            </>
                            :null
                        }
                        
                </div>
            </div>
        )
    }
}

export default TestContainer