import React, {Component} from 'react';
import {ListGroupItem} from "react-bootstrap";
import {COMPLETED} from "../constant/TodoStatus";

class Todo extends Component {
    render() {

        let todo = this.props.todo;
        let changeStatus = this.props.changeStatus;
        let isCompleted =  todo.status === COMPLETED;

        debugger;

        return (
            <ListGroupItem
                bsStyle={isCompleted ? "success" : "info"}
                onClick={(e) => {
                    changeStatus();
                    setTimeout(e.target.blur.bind(e.target), 100) ;
                }}
                style={{
                    margin: "5px auto",
                    textDecoration: isCompleted ? "line-through" : null
                }}>
                {todo.text}
            </ListGroupItem>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;
