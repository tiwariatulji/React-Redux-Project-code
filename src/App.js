import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import BookContainer from './Component/bookContainer'
import store from "./redux/Store"
function App() {
  return (
    <Provider store={store}>
    <div className="App">

     <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
