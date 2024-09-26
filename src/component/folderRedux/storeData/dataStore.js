import { configureStore } from '@reduxjs/toolkit';
import authSlice from "../sliceNew/newSlice";
import createSagaMiddleware from "redux-saga";
import { all } from 'redux-saga/effects';
import tableSaga from '../saga/tableSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([tableSaga()]);
}

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

