import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, changeStatus}) => {
    let htmlTodos = todos.map((todo) => (
        <Todo key={todo.id} todo={todo} changeStatus={() => changeStatus(todo.id)}/>));
    return (
        <ul className="list-group">
            {htmlTodos}
        </ul>
    );
};

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;
