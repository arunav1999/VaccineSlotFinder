import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar/Navbar';
import Testing from './testing/Testing';
import CategoryCheckbox from './checkbox/CategoryCheckbox';
import Dropdowns from './dropdowns/Dropdowns'
import Cards from './cards/Cards'

ReactDOM.render(
  <>
    <Navbar/>,
    <CategoryCheckbox/>,
    <Dropdowns/>,
    <Cards/>
  </>,
  document.getElementById('root')
);


reportWebVitals();
