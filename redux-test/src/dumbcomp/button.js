import React from 'react' ; 





 export class Button extends React.Component {
    
    
    
     
  
            /*ici je render le boutton que je passe a cardcom pour ne rien avoir en function ici je passe toutes les functions au container au dessus*/ 

    render () {
        return ( 
            <div >
            <button onClick={this.props.likeCreator}  > Like </button>
            <input  onChange={this.props.Onchangement}></input>
            <button onClick={this.props.dislikeCreator}>UnLike  </button>
            </div>
            
            
        )
    }
}
