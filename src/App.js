import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Counter } from './components';

function App () {
    return (
      <Provider store={store} >
        <Counter />
      </Provider>
    );
}

export default App;
