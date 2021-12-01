import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom'

const Dropdowns = () =>
{
    render()
    {
        return(
            <>
               <div className="dropdown_aligner">
               <div className="dropdown_container">
                   <div className="dropdown">
                        <div>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>State</option>
                                <option value="1">State 1</option>
                                <option value="2">State 2</option>
                                <option value="3">State 3</option>
                            </select>
                        </div>  

                        <div>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>District</option>
                                <option value="1">District 1</option>
                                <option value="2">District 2</option>
                                <option value="3">District 3</option>
                            </select>
                        </div>  
                        <button type="button" class="btn btn-primary search_btn">Search</button>
                        
                   </div>
                </div>
               </div>
                
            </>
        );
    }
}
export default Dropdowns;