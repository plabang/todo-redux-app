import { faCheck, faListUl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.scss';
import { addTodo, toggleTodo } from './todoSlice';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos);

    // const [todoList, setTodoList] = useState([]);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo) => {
        const action = toggleTodo(todo);
        // console.log(action);
        dispatch(action);
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
        const action = addTodo(values);
        // console.log(action);
        dispatch(action);
    }

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card style={{ width: "24rem" }} bg="light">
                <Card.Body>
                    <h1 className="d-flex justify-content-center">Todos</h1>
                    <div className="mt-5"><TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} /></div>
                    <div className="mt-3"><TodoForm onSubmit={handleTodoFormSubmit} /></div>
                    <div className="d-flex justify-content-center mt-5">
                        <Button variant="light mr-4" onClick={handleShowAllClick}><FontAwesomeIcon icon={faListUl} size="3x" color="#15aabf" /></Button>
                        <Button variant="light mr-4" onClick={handleShowNewClick}><FontAwesomeIcon icon={faTimes} size="3x" color="red" /></Button>
                        <Button variant="light mr-4" onClick={handleShowCompletedClick}><FontAwesomeIcon icon={faCheck} size="3x" color="green" /></Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default TodoFeature;