import {Tab, Tabs} from "react-bootstrap";
import * as React from "react";
import {COMPLETED, UNCOMPLETED} from "../constant/TodoStatus";
import TodoListData from "../containers/TodoListData";

function TogglableTabs() {
    return (
        <Tabs defaultActiveKey={2} id="togglable-todo-tabs" justified>
            <Tab eventKey={1} title="All"><TodoListData/></Tab>
            <Tab eventKey={2} title="Uncompleted"><TodoListData status={UNCOMPLETED} /></Tab>
            <Tab eventKey={3} title="Completed"><TodoListData status={COMPLETED}/></Tab>
        </Tabs>
    );
}

TogglableTabs.propTypes = {};
TogglableTabs.defaultProps = {};

export default TogglableTabs;

