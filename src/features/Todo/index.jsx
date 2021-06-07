import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import './styles.scss';
import TodoForm from './components/TodoForm';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    // const initTodoList = [
    //     {
    //         id: 1,
    //         title: 'Eat',
    //         status: 'new'
    //     },
    //     {
    //         id: 2,
    //         title: 'Sleep',
    //         status: 'completed'
    //     },
    //     {
    //         id: 3,
    //         title: 'Code',
    //         status: 'new'
    //     }
    // ]

    const [todoList, setTodoList] = useState([]);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        // console.log(todo, idx);

        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        newTodoList[idx] = newTodo;

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    // console.log(renderedTodoList);

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        };

        const newTodoList = [...todoList, newTodo];

        setTodoList(newTodoList);
    }

    return (
        <div className="todo-feature">
            <h3>Todos</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <TodoForm onSubmit={handleTodoFormSubmit} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;