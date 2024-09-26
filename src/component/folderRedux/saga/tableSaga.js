import {call, put, takeLatest} from "redux-saga/effects";
import TableService from "../../services/tableServices/tableService";
import { FETCH_USER_DATA, fetchUserDataSuccess, fetchUserDataFailure} from "./actions";


function* fetchUserDataSaga(action){
    try {
        const data = yield call(TableService.getUserData, action.payload.url);
        yield put(fetchUserDataSuccess(data));
    } catch (error) {
       yield put(fetchUserDataFailure(error.message)); 
    }
}

export default function* tableSaga(){
    yield takeLatest(FETCH_USER_DATA, fetchUserDataSaga);
}