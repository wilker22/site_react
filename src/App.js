import React from "react";
import {BrowserRouter} from "react-router-dom"
import AppRouter from './router/AppRoutter';

import AllServicePage from "./pages/AllServicePage";



function App() {
  return (
    <BrowserRouter>
     <AppRouter />
     </BrowserRouter>
  );
}

export default App;
