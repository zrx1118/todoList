import React, { Component } from 'react'

import Item from './Item.js'

class List extends Component{
    render(){
        const {
            list,
            toggleItem,
            del,
            edit
        } = this.props
        return (
            <ul>
                {
                    list.map((item,index) => {
                        return (<Item 
                            item={item}
                            toggleItem={toggleItem}
                            del={del}
                            edit={edit}
                            key={index}/>
                        )
                    })
                }
            </ul>    
        )
    }
}


export default List