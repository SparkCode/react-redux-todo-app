export let ADD_RECORD = "ADD_RECORD";
export let SET_RECORD_STATUS = "SET_RECORD_STATUS";


export const addRecord = (record) => {
    return {
        type: ADD_RECORD,
        record
    }
};

export const changeRecordStatus = (id) => {
    return {
        type: SET_RECORD_STATUS,
        id
    }
};




