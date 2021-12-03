import Dropdowns from '../dropdowns/Dropdowns';
import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import {useState} from 'react';

const CategoryCheckbox = () =>
{

  const [search_filters,setSearchFilters] = useState({'vaccine_type':'','age_group':'','fee_type':''});


  const handleCheckboxStateChange = () =>
  {
    // Vaccine Types:
    var covaxin = document.getElementById("btn-check-outlined1").checked;
    var covisheild = document.getElementById("btn-check-outlined2").checked;
    var sputnikV = document.getElementById("btn-check-outlined3").checked;
    var selected_vaccine;
    if(covaxin == true)
      selected_vaccine = 'COVAXIN'
    else if(covisheild == true)
      selected_vaccine = 'COVISHEILD'
    else if(sputnikV == true)
      selected_vaccine = 'SPUTNIKV'


    // Age Groups:
    var eighteenAndAbove = document.getElementById("btn-check-outlined4").checked;
    var fortyfiveAndAbove = document.getElementById("btn-check-outlined5").checked;
    var eighteenTofortyfourOnly = document.getElementById("btn-check-outlined6").checked;
    var selected_age_group;
    if(eighteenAndAbove == true)
      selected_age_group = '18ANDABOVE'
    else if(fortyfiveAndAbove == true)
      selected_age_group = '45ANDABOVE'
    else if(eighteenTofortyfourOnly == true)
      selected_age_group = '18TO44ONLY'

    // Fee type:
    var free = document.getElementById("btn-check-outlined7").checked;
    var paid = document.getElementById("btn-check-outlined8").checked;
    var selected_fee_type;
    if(free == true)
      selected_fee_type = 'FREE'
    else if(paid == true)
      selected_fee_type = 'PAID'

    // Handling edge case
    if(selected_vaccine === 'undefined')
      selected_vaccine = 'COVISHEILD'
    else if(selected_age_group === 'undefined')
      selected_age_group = '18ANDABOVE'
    else if(selected_fee_type === 'undefined')
      selected_fee_type = 'FREE'

    setSearchFilters({'vaccine_type':selected_vaccine,'age_group':selected_age_group,'fee_type':selected_fee_type})
    

  }

  useEffect(() => {
    //console.log(search_filters)
  },[search_filters]);

  render()
  {
    return(
      <>
        
        <div className="checkbox_container">
        <div style={{fontWeight:600}}>Vaccine type:</div>
          <div className="checkbox">
            <input  onChange={handleCheckboxStateChange} type="checkbox" class="btn-check" id="btn-check-outlined1" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined1">Covaxin</label>
          </div>

          <div className="checkbox">
            <input onChange={handleCheckboxStateChange} type="checkbox" class="btn-check" id="btn-check-outlined2" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined2">Covisheild</label>
          </div>

          
          <div className="checkbox">
            <input onChange={handleCheckboxStateChange} type="checkbox" class="btn-check" id="btn-check-outlined3" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined3">Sputnik V</label>
          </div>
          <div style={{fontWeight:600}}>Age group:</div>
          <div className="checkbox">
            <input onChange={handleCheckboxStateChange}  type="checkbox" class="btn-check" id="btn-check-outlined4" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined4">18 and above</label>
          </div>

          <div className="checkbox">
            <input onChange={handleCheckboxStateChange}  type="checkbox" class="btn-check" id="btn-check-outlined5" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined5">45 and above</label>
          </div>

          <div className="checkbox">
            <input onChange={handleCheckboxStateChange}  type="checkbox" class="btn-check" id="btn-check-outlined6" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined6">18-44 only</label>
          </div>

          <div style={{fontWeight:600}}>Cost:</div>
          <div className="checkbox">
            <input onChange={handleCheckboxStateChange}  type="checkbox" class="btn-check" id="btn-check-outlined7" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined7">Free</label>
          </div>
          <div className="checkbox">
            <input onChange={handleCheckboxStateChange}  type="checkbox" class="btn-check" id="btn-check-outlined8" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btn-check-outlined8">Paid</label>
          </div>
          
        </div>
        <br/>
        <Dropdowns sf={search_filters}/>
      </>
    );
  }
} 
export default CategoryCheckbox;
