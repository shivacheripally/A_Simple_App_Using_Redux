import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import favoriteColors from './components/reducers.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import actions from './components/actions';

import Counter from './components/reducers.js';

import App from './components/App';

var store = createStore(Counter);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
