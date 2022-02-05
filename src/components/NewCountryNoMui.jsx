import React, { Component } from 'react';
 
 class NewCountryNoMui extends Component{
    state = {
        
}
    handleClick = () => {
        const name = prompt("Enter a country")
        if (name.trim().length > 0) {
            this.props.onAdd(name);
        } 
    }
    render(){
        return (
            <div className='Country' style={{ margin: 'auto', display: 'block'}}>
                <button onClick={ this.handleClick }>New Country</button>
            </div>
        );
    }
}

export default NewCountryNoMui