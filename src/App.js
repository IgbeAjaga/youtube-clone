import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
     <div className="App">
      
      <Header />
        <Routes>
          <Route path='/search/:searchTerm' element={ 
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>
          } />
         <Route path='/' element={
      <div className='app_page'>
      <Sidebar />
      <RecommendedVideos />
      </div>
      } />
      </Routes>
      
    </div>
    );
}

export default App;
