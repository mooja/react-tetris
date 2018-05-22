import * as React from 'react';
import { Provider } from 'react-redux';


import './App.css';

import { createStore } from 'redux'
import tetrisApp from './reducers'

import { addFigure, GameTick } from './actions'
import Tetris from './components/Tetris/Tetris'


const store = createStore(tetrisApp);
store.dispatch(addFigure())
store.dispatch(GameTick())


class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Tetris/>
      </Provider>
    );
  }
}

export default App;
