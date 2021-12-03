import Dropdowns from '../dropdowns/Dropdowns';
import { render } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';

const CategoryCheckbox = () =>
{
  render()
  {
    return(
      <>
        
        <div className="checkbox_container">
        <div style={{fontWeight:600}}>Vaccine type:</div>
          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined1" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined1">Covaxin</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined2" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined2">Covisheild</label>
          </div>

          
          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined3" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined3">Sputnik V</label>
          </div>
          <div style={{fontWeight:600}}>Age group:</div>
          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined4" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined4">18 and above</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined5" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined5">45 and above</label>
          </div>

          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined6" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined6">18-44 only</label>
          </div>

          <div style={{fontWeight:600}}>Cost:</div>
          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined7" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined7">Free</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" class="btn-check" id="btn-check-outlined8" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined8">Paid</label>
          </div>
          
        </div>
        <br/>
        <Dropdowns/>
      </>
    );
  }
} 
export default CategoryCheckbox;
