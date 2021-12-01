import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom'

const Testing = () =>
{
    render()
    {
        return(
            <>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vaccine Slot Finder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Find by Pin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Find by District </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      
    </ul>
  </div>
</nav>
            </>
        );
    }
}
export default Testing;