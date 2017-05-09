import {ADD_RECORD, SET_RECORD_STATUS} from "../actions/actions";
import {combineReducers} from "redux";
import {COMPLETED, UNCOMPLETED} from "../constant/TodoStatus";
let getId = () => new Date().getTime();



const todos = (state=[], action) => {
    switch (action.type) {
        case ADD_RECORD: {
            if (action.record.text.trim().length !== 0) {
                let newTodo = {...action.record, id: getId(), status: UNCOMPLETED};
                return state.concat([newTodo]);
            }
        }

        case SET_RECORD_STATUS: {
            return state.map((todo) => {
                return todo.id === action.id
                    ? Object.assign({}, todo, {status: todo.status === UNCOMPLETED ? COMPLETED : UNCOMPLETED})
                    : todo;
            });
        }

        default : return state;
    }
};

export const todoAppReducer = combineReducers({todos});
