import React, {Component} from 'react';
import PostHolder from './components/PostHolder';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PostHolder/>
      </Provider>
    )
  }
}


export default App;
