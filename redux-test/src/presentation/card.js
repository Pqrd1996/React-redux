import {Button} from './../dumbcomp/button.js' ; 
import React from 'react' ;
import { createStore } from 'redux' ;
import {store } from 'react-redux'

export class Card extends React.Component {
    render () {
        return (
        <div>
        <Button 
        value={this.state.value}
        Onchangement={this.Onchangement.bind(this)}
        onComment={() => store.dispatch({ type: 'ADD_LIKE'})}  
        onDecrement={() => store.dispatch({ type: 'REM_LIKE' })}
        />  
        </div>)
    }
}

