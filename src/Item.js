import React, { Component } from 'react'

class Item extends Component{
    constructor(){
        super()
        this.state = {
            readyCore: true
        }
    }
    setCore() {
        this.setState({
            readyCore: !this.state.readyCore
        })
    }
    readOnly() {
        const{
            del,
            toggleItem,
            item
        } = this.props
        return(
            <li key={item.id}>
                <input 
                    type="checkbox"
                    checked={item.checked}
                    onChange={()=>{
                        toggleItem(item.id)
                    }}/>
                <span onDoubleClick={this.setCore.bind(this)}>
                    {item.name}
                </span>
                <button
                    onClick={()=>{
                        del(item.id)
                    }}
                > X </button>
            </li>
        )
    }
    editMode() {
        const{
            del,
            toggleItem,
            item,
            edit
        } = this.props
        return(
            <li>
                <input 
                    type="checkbox"
                    checked={item.checked}
                    onChange={()=>{
                        toggleItem(item.id)
                    }}/>
                <input type="text" 
                    defaultValue={item.name}
                    onKeyUp={(e)=>{
                        var val = e.target.value;
                        if(e.keyCode === 13 && val) {
                            edit(val, item.id)
                            this.setCore()
                        }
                    }}/>
                <button
                    onClick={() => {
                        del(item.id)
                    }}
                > X </button>
            </li>
        )
    }
    render(){
        return (
            this.state.readyCore ? this.readOnly() : this.editMode()
        )
    }
}
export default Item