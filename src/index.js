import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Books from './components/Books';
import Book from './components/Book';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}  >
          <Route path='/about' element={<About />} />

          <Route path='/books' element={<Books />} >
            <Route path=':bookId' element={<Book />} />
            <Route index element={<p> کتاب مورد نظر خود را انتخاب کنید</p>} />
          </Route>


          <Route path='*' element={<h3 style={{fontFamily:'Vazir'}}>ای بابا این مورد رو پیدا نمیتونم کنم</h3>} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


