import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import pathname from './serialize/pathnames';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={pathname.HOME_PAGE} element={<MainPage />} />
        <Route path={pathname.ADD_PAGE} element={<AddPage />} />
      </Routes>
    </Router>
  );
}

export default App;
