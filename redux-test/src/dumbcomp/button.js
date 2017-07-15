import React from 'react' ; 
import { connect} from 'react-redux' ; 

export class Button extends React.Component {
    constructor () 
    {
        super()
        this.likeCreator = this.likeCreator.bind(this) ;  
        this.onDislike = this.onDislike.bind(this) ;  
    }
    
    
    likeCreator (e) 
    {
        const commentId =  (e.target.parentNode.dataset.id)  ;
        this.props.onLike(commentId) ;
    } 
    
    onDislike (e) 
    {
    const commentId = (e.target.parentNode.dataset.id) ; 
    this.props.onDislike(commentId) ;
    } 
    
    render () {
        return ( 
                <div data-id='commentzone'>
            
            <div className='cardComment' data-id="1" >
            <h1> you have {} like </h1>
            <button onClick={this.likeCreator}  > Like </button>
            <input  onChange={this.props.Onchangement}></input>
            <button onClick={this.onDislike}>UnLike  </button>
            </div>
            
            <div className='cardComment' data-id='2' >
            <h1> you have {} like </h1>
            <button onClick={this.likeCreator}  >Like </button>
            <input  onChange={this.props.Onchangement}></input>
            <button onClick={this.onDislike}>UnLike</button>
            </div>
                
                </div>
        )
    }
}

