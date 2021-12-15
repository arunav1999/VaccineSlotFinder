import CategoryCheckbox from '../checkbox/CategoryCheckbox'
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'

const Navbar = (props) =>
{
    render()
    {
        return(
            <>
                <div className="header">
                    <h1 className="heading_text">GetMeJabbed.com</h1>
                </div>
            </>
        );
    }
}
export default Navbar;