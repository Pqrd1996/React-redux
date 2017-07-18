import {Immutable , List , fromJS } from 'immutable' ;

 function counter ( state = 0 , action , name , commentId , i  ) {
    switch (action.type) {
        
        
        
        case 'ADD_LIKE' :  
            
const newLstate = state.setIn(['comment' , action.commentId, 'like' ],state.getIn(['comment' , action.commentId , 'like' ]  ) +1) ;
return newLstate 
        
        case 'ADD_DELETE' :
                        
            
            const premDstate = state.deleteIn([ 'comment' , action.commentId]) ; 
                return premDstate
        
        
        case 'ADD_CARD' :
            
const premAstate = state.setIn(['comment'] , state.get('comment').unshift(  fromJS({
          name : action.name  , 
          text : action.text, 
          like : 0 , 
          number : action.number 
        })))

            console.log(action.name)
                return premAstate
        
        
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

export default counter ; 