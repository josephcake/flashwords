import React, { Component } from "react";
import TestContainer from '../container/TestContainer'
import TestPathContainer from '../container/TestPathContainer'

class Test extends Component {
    render(){
        // const {myWords} = this.props
        const myWords = [
                {"word":"word1", "definition":"definition1"},
                {"word":"word2", "definition":"definition2"},
                {"word":"word3", "definition":"definition3"},
                {"word":"word4", "definition":"definition4"}
            ]
        return(
            <div id={"test-page"} className={"d-flex flex-row"}>
                <TestPathContainer/>
                <TestContainer myWords={myWords}/>
            </div>
        )
    }
}
export default Test