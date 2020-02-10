import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,} from 'react-router-dom';

import Home from './page/Home.js'
import CardContainer from './container/CardContainer.js'
import ListContainer from './container/ListContainer.js'
import Navigation from './navigation/Navigation.js'
import MyWords from './page/MyWords.js'
import {gre} from './gre.js'
import {sat} from './sat.js'

class App extends React.Component{
    state={
      myWords:[],
      currentCard:"gre"
    }  
    addToWords=(e)=>{
      this.setState({
        myWords: [...this.state.myWords, e]
      })
    }
    removeFromWords=(e)=>{
      let idx = this.state.myWords.indexOf(e)
      let copy = this.state.myWords
      copy.splice(idx, 1)
      this.setState({
        myWords: copy
      })
    }
    componentDidMount(){
      // console.log()
      window.scrollTo(0,0)
    }
    setCard=(e)=>{
        this.setState({
          currentCard: e
        })
    }
    render(){
      const card = this.state.currentCard==="gre"?gre:this.state.currentCard==="sat"?sat:null
        return (            
            <div className="App">
                <Navigation setCard={this.setCard}/>    
                <Switch>                    
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cards" render={() => <CardContainer addToWords={this.addToWords} currentCard={card}/>}/>
                    <Route exact path="/lists" render={() => <ListContainer addToWords={this.addToWords} currentCard={card}/>}/>
                    <Route exact path="/mywords" render={() => <MyWords myWords={this.state.myWords} removeFromWords={this.removeFromWords}/>} />
                </Switch>
            </div>            
        );
    }
}

export default App;
