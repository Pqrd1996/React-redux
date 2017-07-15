

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

export default counter ; 