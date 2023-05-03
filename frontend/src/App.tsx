import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import { ADD_PAGE, HOME_PAGE } from './serialize/path';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PAGE} element={<MainPage />} />
        <Route path={ADD_PAGE} element={<AddPage />} />
      </Routes>
    </Router>
  );
}

export default App;
