import React, { Component } from 'react';
import './App.css'
import Header from './Header'
import Input from './Input'
import List from './List'


class App extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                { name: '洗脸', checked: false, id: 1 },
                { name: '刷牙', checked: false, id: 2 },
                { name: '换衣服', checked: true, id: 3 }
            ]
        }
    }
    toggleItem(id) {
        let target = this.state.list.find(item => { return item.id === id })

        target.checked = !target.checked;
        this.setState({
            list: this.state.list
        })
    }
    del(id) {
        let index = this.state.list.findIndex(item => { return item.id === id })
        this.state.list.splice(index, 1);

        this.setState({
            list: this.state.list
        })
    }
    addTodo(text) {
        if (!text) return;
        let len = this.state.list.length,
            idx = this.state.list[len - 1].id + 1;
        var newItem = {
            name: text,
            checked: false,
            id: idx
        }
        this.state.list.push(newItem);
        this.setState({
            list: this.state.list
        })
    }
    edit(text, id) {
        let target = this.state.list.find(item => { return item.id === id })
        target.name = text;
        this.setState({
            list: this.state.list
        })
    }
    render() {
        let number = this.state.list.filter(item => { return !item.checked }).length
        return ( <div>
                <Header name = "Silvia" number = { number }/>
                <Input addTodo = { this.addTodo.bind(this) }/>
                <List
                    list = { this.state.list }
                    toggleItem = { this.toggleItem.bind(this) }
                    del = { this.del.bind(this) }
                    edit = { this.edit.bind(this) }/>
            </div>
        );
    }
}

export default App;