import {connect} from "react-redux";
import TodoList from "../presentational-сomponent/TodoList";
import {changeRecordStatus} from "../../actions/actions";

let mapStateToProps = (state, ownProps) => {
    console.log(state);
  let status = ownProps.hasOwnProperty("status") ? ownProps["status"] : null;
  return {
      todos: status ? state.todos.filter(x => x.status === status) : state.todos
  }
};


let mapDispatchToProps  = (dispatch) => {
  return {
      changeStatus: (id) =>  dispatch(changeRecordStatus(id))
  }
};


let TodoListData = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListData;