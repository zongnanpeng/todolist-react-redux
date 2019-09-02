import React, { Component } from 'react'
import TodolistUI from './TodolistUI'
import store from '../Store/index'
import Axios from 'axios';
import { getListCreator, putTodoCreator, postTodoCreator, deleteTodoCreator } from '../Store/actionCreators'

export default class Todolist extends Component {
    constructor() {
        super();
        this.state = store.getState();
        this.storeSubscribe = this.storeSubscribe.bind(this);
        this.putTodo = this.putTodo.bind(this);
        this.postTodo = this.postTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        store.subscribe(this.storeSubscribe);
    }
    render() {
        const { todo, list } = this.state;
        return (
            <TodolistUI
                todo={todo}
                list={list}
                putTodo={this.putTodo}
                postTodo={this.postTodo}
                deleteTodo={this.deleteTodo}
            />
        )
    }

    componentDidMount() {
        Axios
            .get('https://www.easy-mock.com/mock/5d5cb265f39c7a20e25b9224/reactBasic/todolist')
            .then(response => {
                const value = response.data.data;
                const action = getListCreator(value);
                store.dispatch(action);
            })
    }


    // 订阅store更新
    storeSubscribe() {
        this.setState(
            store.getState()
        )
    }

    //更新todo值
    putTodo(e) {
        let value = e.target.value;
        const action = putTodoCreator(value);
        store.dispatch(action)
    }

    // 添加todo至list
    postTodo() {
        const action = postTodoCreator();
        store.dispatch(action);
    }

    // 删除todo
    deleteTodo(index) {
        const action = deleteTodoCreator(index);
        store.dispatch(action);
    }
}
