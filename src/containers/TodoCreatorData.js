import {connect} from "react-redux";
import TodoCreator from "../сomponents/TodoCreator";
import {addRecord} from "../actions/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addRecord: (newRecord) => dispatch(addRecord(newRecord))

    }
};
let TodoCreatorData = connect(null, mapDispatchToProps)(TodoCreator);

export default TodoCreatorData;

