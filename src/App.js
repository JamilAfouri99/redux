import React from "react"
import {Provider} from "react-redux"
import store from "./component/store/store"
import Counter from "./component/Counter"
import './App.css';

class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  )}
}

export default App;
