import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }

    return (
        <Container style={{ height: "12rem" }} className="d-flex flex-column-reverse overflow-auto">
            {todoList.map((todo, idx) => (
                <Row>
                    <Col xs="10" className="todo-list">
                        <li key={todo.id} className={classnames({
                            'todo-item': true,
                            completed: todo.status === 'completed'
                        })}
                            onClick={() => handleTodoClick(todo, idx)}
                        >{todo.title}</li>
                    </Col>
                    <Col xs="2">
                        {todo.status === 'completed' ? <FontAwesomeIcon icon={faCheck} size="1x" color="green" /> : <div></div>}
                    </Col>
                </Row>

            ))}
        </Container>

    );
}

export default TodoList;