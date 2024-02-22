import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import AddMoviePage from './pages/AddMoviePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movie/:id' element={<MovieDetailPage/>}/>
        <Route path='/movie/add' element={<AddMoviePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
