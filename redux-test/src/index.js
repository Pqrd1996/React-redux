import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux' ;
import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore  } from 'redux' ;
import counter from './reducer/mainReducer'
import './index.css';
import Card from './container/card'
import {enhancers , defaultState} from './initial' ; 


let store = createStore( counter , defaultState , enhancers)
class App extends Component {
  

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Card 
onLike={(commentId) => store.dispatch({type :'ADD_LIKE' , commentId })}
onDislike={(commentId) => store.dispatch({ type: 'REM_LIKE' ,commentId })}
       />
       
       
       
        <p className="App-intro">
         
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

