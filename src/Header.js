import React, { Component } from 'react'

class Header extends Component{
    render(){
        const { 
            name,
            number
        } = this.props;

        return (
            <div>
                {name}，你有{number}条待办项目未处理
            </div>    
        )
    }
}


export default Header