import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import {Normas} from './components';

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/normas' element={<Normas/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);