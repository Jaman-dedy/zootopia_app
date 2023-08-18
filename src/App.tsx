import React from 'react';
import { Provider } from "react-redux"

import { store } from 'redux/store';
import {
  RouterProvider,
} from "react-router-dom";
import './assets/styles/style.css'
import router from './AppRouter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>

  );
}

export default App;
