import React, { Component } from 'react'

class Input extends Component{
    render(){
        const {
            addTodo
        } = this.props

        return (
            <div>
                <input 
                onKeyUp={(e)=>{
                    var val=e.target.value;
                    if (e.keyCode ===13 && val) {
                        e.target.value = '';
                        addTodo(val)
                    }
                }}
                style = {{width:'250px',height:'40px'}}/>
            </div>    
        )
    }
}


export default Input