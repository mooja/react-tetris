import * as React from 'react';
import { Provider } from 'react-redux';


import './App.css';

import { createStore } from 'redux'
import tetrisApp from './reducers'

import { addFigure, gameTick, moveFigure } from './actions'
import Tetris from './components/Tetris/Tetris'


const store = createStore(tetrisApp);
store.dispatch(addFigure());
store.dispatch(gameTick());
document.addEventListener('keydown', e => {
  // tslint:disable no-console
  // console.log(e);
  switch(e.key) {
    case 'ArrowDown':
    case 'j':
    case 'J':
      store.dispatch(moveFigure("DOWN"));
      e.preventDefault();
      break;
    case 'ArrowLeft':
    case 'h':
    case 'H':
      store.dispatch(moveFigure("LEFT"));
      e.preventDefault();
      break;
    case 'ArrowRight':
    case 'l':
    case 'L':
      store.dispatch(moveFigure("RIGHT"));
      e.preventDefault();
      break;
  }
});


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
