import React from 'react' ; 
import { connect} from 'react-redux' ; 

export class Button extends React.Component {
    constructor () 
    {
        super()
        this.likeCreator = this.likeCreator.bind(this) ;  
        this.ondislike = this.ondislike.bind(this) ;  
    }
    
    
    likeCreator (e) 
    {
        const commentId =  (e.target.parentNode.dataset.id)  ;
        this.props.onComment(commentId) ;
    } 
    
    ondislike (e) 
    {
    const commentId = (e.target.parentNode.dataset.id) ; 
    this.props.onDecrement(commentId) ;
    } 
    
    render () {
        return ( 
                <div data-id='commentzone'>
            
            <div className='cardComment' data-id="1" >
            <h1> you have {} like </h1>
            <button onClick={this.likeCreator.bind()}  > Like </button>
            <input  onChange={this.props.Onchangement}></input>
            <button onClick={this.ondislike}>UnLike  </button>
            </div>
            
            <div className='cardComment' data-id='2' >
            <button onClick={this.likeCreator.bind(this.id)}  >Like </button>
            <input  onChange={this.props.Onchangement}></input>
            <button onClick={this.ondislike}>UnLike</button>
            </div>
                
                </div>
        )
    }
}

