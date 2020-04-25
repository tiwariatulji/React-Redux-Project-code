import {createStore} from "redux";
import bookReducer from './Books/BookReducer'

const store = createStore(bookReducer)

export default store;