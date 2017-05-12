import {createStore} from "redux";
import {todoAppReducer} from "./reducers/reducers";
import {COMPLETED, UNCOMPLETED} from "./constant/TodoStatus";

let initState =  {todos: [{id:1, text: "helloWorld", status: UNCOMPLETED},
    {id:2, text: "helloWorld2", status: UNCOMPLETED},
    {id:3, text: "helloWorld3", status: COMPLETED}]};

const store = createStore(todoAppReducer, initState);

export default store;