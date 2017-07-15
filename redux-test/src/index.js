import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux' ;
import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from './dumbcomp/button.js' ; 
import { createStore , compose } from 'redux' ;
import {Bringer } from './bringme' ; 
import Immutable from 'immutable' ; 
import { Map,is , List , fromJS } from 'immutable' ; 
import './index.css';

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f ) ; 

/*var defaultState = Immutable.List.of(1)*/
var defaultState = Immutable.fromJS({
    number : 1 ,
    
    comment : { 
       1 :  { 
          name : 'billy' , 
          text : 'bob' , 
          like : 10 , 
          number : 1
       }  , 
               
        2 : { 
          name : 'john' , 
          text : 'hello' , 
          like : 2 , 
          number : 2
        }
    }
})

let store = createStore( counter , defaultState , enhancers)


 function counter ( state = 0, action , commentId ) {
    switch (action.type) {
        
        
        
        case 'ADD_LIKE' :     
const newState = state.setIn(['comment' , action.commentId, 'like' ],state.getIn(['comment' , action.commentId , 'like' ]  ) +1) ;
            return newState
    
        
        case 'REM_LIKE' :
if (state.getIn(['comment' , action.commentId, 'like' ]  ) === 0  ) {
                console.log('poor in like ?') ; 
                return state
                } else {
const newMstate = state.setIn(['comment', action.commentId, 'like'],state.getIn(['comment' , action.commentId, 'like' ] ) - 1 ) ;
                return newMstate    
}
        
        default : 
            return state
    }
    
}



class App extends Component {
    constructor () {
        super() ;
        this.state = {
            value : '',
            name : 'lidya'
        }
        this.Onchangement.bind(this) ; 
        
    }
  
    Onchangement (e) {
      const textInput = e.target.value ;
      this.setState ({ value : textInput })
    }  

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
    <Button 
        value={this.state.value}
        Onchangement={this.Onchangement.bind(this)}
        onComment={(commentId) => store.dispatch({type :'ADD_LIKE' , commentId })}  
        onDecrement={(commentId) => store.dispatch({ type: 'REM_LIKE' ,commentId })}
        />
        
      <Bringer
       value={this.state.value}
       name={this.state.name}
     />
        <p className="App-intro">
         
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
/*
ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
