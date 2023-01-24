
// create a makeStore function
import {Context, createWrapper} from "next-redux-wrapper";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers/index"
import thunk, {ThunkDispatch} from "redux-thunk";

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<any, any, any>