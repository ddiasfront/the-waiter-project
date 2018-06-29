import {RECORD_CODE} from '../actions/code/actionTypes'

const codeReducer = (code = {}, action) => {
    switch(action.type){
        case RECORD_CODE:
            return action.code
        default:
        return code
    }
}

export default codeReducer