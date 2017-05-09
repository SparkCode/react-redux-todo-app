import {createStore} from "redux";
import {todoAppReducer} from "./reducers/reducers";
import {UNCOMPLETED} from "./constant/TodoStatus";
const store = createStore(todoAppReducer, {todos: [{id:1, text: "helloWorld", status: UNCOMPLETED}]});

export default store;