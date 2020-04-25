import { Buy_book } from "./BooksType"

const iState = {                               // create state
    numberofBook: 50
}

const bookReducer = (state = iState, action) => {          // create reducer
    switch (action.type) {

        case Buy_book: return {

            ...state,
            numberofBook: state.numberofBook -2
        }
        default : return state


    }

}
export default bookReducer;