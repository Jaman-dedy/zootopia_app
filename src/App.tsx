import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import './assets/styles/style.css'
import router from './AppRouter'

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
