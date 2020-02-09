import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,} from 'react-router-dom';

import Home from './page/Home.js'
import CardContainer from './container/CardContainer.js'
import Navigation from './navigation/Navigation.js'
import MyWords from './page/MyWords.js'

class App extends React.Component{
    state={
      myWords:[],
    }  
    addToWords=(e)=>{
      this.setState({
        myWords: [...this.state.myWords, e]
      })
    }
    render(){
        return (            
            <div className="App">
                <Navigation/>    
                <Switch>                    
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cards" render={() => <CardContainer addToWords={this.addToWords}/>}/>
                    <Route exact path="/mywords" render={() => <MyWords myWords={this.state.myWords}/>} />
                </Switch>
            </div>            
        );
    }
}

export default App;
