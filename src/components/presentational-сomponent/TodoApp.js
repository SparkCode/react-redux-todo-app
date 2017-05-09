import React from "react";
import TodoCreatorData from "../container-component/TodoCreatorData";
import TogglableTabs from "./TogglableTabs";

export const TodoApp = () => (
    <div className="todo-component container-fluid">
        <div className="jumbotron" style={{maxWidth: "700px", margin: "auto"}}>
            <h2>To-do application</h2>
            <TodoCreatorData/>
            <TogglableTabs/>
        </div>
    </div>
)