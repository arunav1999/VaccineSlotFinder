import CategoryCheckbox from '../checkbox/CategoryCheckbox'
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom'

const Navbar = (props) =>
{
    render()
    {
        return(
            <>
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Vaccine Slot Finder</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Find by Pin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Find by District</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Some feature</a>
                            </li>
            
                        </ul>
                    </div>
                </nav>
                <h1 className="dropdown_aligner">Filters:</h1>
                
            </>
        );
    }
}
export default Navbar;