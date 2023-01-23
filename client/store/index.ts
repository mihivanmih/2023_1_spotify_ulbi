
// create a makeStore function
import {Context, createWrapper} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer} from "./reducers/index"

const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});