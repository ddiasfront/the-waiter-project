import {RECORD_CODE} from './actionTypes'

export const recordCode = (code) => {
    return {
        type: RECORD_CODE,
        code: code
    }
}