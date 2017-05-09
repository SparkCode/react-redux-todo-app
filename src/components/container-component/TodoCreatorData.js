import {addRecord} from "../../actions/actions";
import {connect} from "react-redux";
import TodoCreator from "../presentational-сomponent/TodoCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        addRecord: (newRecord) => dispatch(addRecord(newRecord))

    }
};
let TodoCreatorData = connect(null, mapDispatchToProps)(TodoCreator);

export default TodoCreatorData;

