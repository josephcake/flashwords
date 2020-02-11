import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,} from 'react-router-dom';
import {
  HOME,
  SAT,
  GRE,
  Biology,
  Chemistry,
  Physic,
  Botany,
  Zoology,
  Microbiology,
  OrganicChemistry,
  Biochemistry
  } from './constant/PageConstant.js'
import Home from './page/Home.js'
import Test from './page/Test.js'
import CardContainer from './container/CardContainer.js'
import ListContainer from './container/ListContainer.js'
import Navigation from './navigation/Navigation.js'
import MyWords from './page/MyWords.js'
import {gre} from './data/gre.js'
import {sat} from './data/sat.js'
import {biology} from './data/biology.js'
import {chemistry} from './data/chemistry.js'
import {physic} from './data/physic.js'
import {botany} from './data/botany.js'
import {zoology} from './data/zoology.js'
import {microbiology} from './data/microbiology.js'
import {organicChemistry} from './data/organicChemistry.js'
import {biochemistry} from './data/biochemistry.js'


class App extends React.Component{
    state={
      myWords:[],
      currentCard:null,      
    }  
    addToWords=(e)=>{
      let dup = this.state.myWords.find(word=> word === e)
      if(dup) return
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
      window.scrollTo(0,0)
    }
    setCard=(e)=>{
      this.setState({
        currentCard: e,        
      })
    } 
    render(){
      const current = this.state.currentCard
      const card = current===GRE?gre:
                   current===SAT?sat:
                   current===Biology?biology:
                   current===Chemistry?chemistry:
                   current===Physic?physic:
                   current===Botany?botany:
                   current===Zoology?zoology:
                   current===Microbiology?microbiology:
                   current===OrganicChemistry?organicChemistry:
                   current===Biochemistry?biochemistry:null      
        return (            
            <div className="App">
                <Navigation setCard={this.setCard}/>
                <Switch>                    
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cards" render={() => <CardContainer addToWords={this.addToWords} currentCard={card}/>}/>
                    <Route exact path="/lists" render={() => <ListContainer addToWords={this.addToWords} currentCard={card}/>}/>
                    <Route exact path="/mywords" render={() => <MyWords myWords={this.state.myWords} removeFromWords={this.removeFromWords}/>} />
                    <Route exact path="/test" render={() => <Test myWords={this.state.myWords}/>} />
                </Switch>
            </div>            
        );
    }
}

export default App;
