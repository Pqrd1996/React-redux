import React from 'react' ; 


export class Bringer extends React.Component {
    
    
         

    render () {
        return (<div>
            <h1> {this.props.name} say hello to { this.props.value}</h1>
            </div>

        )
    }
}