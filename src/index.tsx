import React from 'react';
import './index.css';

const container = document.getElementById('root')!;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

