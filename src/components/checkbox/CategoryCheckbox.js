import Dropdowns from '../dropdowns/Dropdowns';
import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import {useState} from 'react';

const CategoryCheckbox = (props) =>
{
    const [vaccineFilter, setVaccineFilter] = useState({
      covaxin: false,
      sputnikV: false,
      covishield: false
    })

    const [ageGroupFilter, setAgeGroupFilter] = useState({
      eighteenAndAbove: false,
      fortyFiveAndAbove: false,
      eighteenToFortyFourOnly: false
    })

    const [feeTypeFilter, setFeeTypeFilter] = useState({
      free: false,
      paid: false
    })

    const handleVaccines = event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setVaccineFilter(
        { 

          covaxin: name === 'COVAXIN' ? value : false,
          sputnikV: name === 'SPUTNIKV' ? value : false,
          covishield: name === 'COVISHIELD' ? value : false
        }
      )
    }
    
    const handleAgeGroups = event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setAgeGroupFilter(
        { 
          eighteenAndAbove: name === '18ANDABOVE' ? value : false,
          fortyFiveAndAbove: name === '45ANDABOVE' ? value : false,
          eighteenToFortyFourOnly: name === '18TO44ONLY' ? value : false
        }
      )
    }

    const handleFeeType = event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setFeeTypeFilter(
        { 
          free: name === 'FREE' ? value : false,
          paid: name === 'PAID' ? value : false
        }
      )
    }

    useEffect(() => {
      props.setFilters({vaccineFilter, ageGroupFilter, feeTypeFilter})
    },[vaccineFilter, ageGroupFilter, feeTypeFilter])

    return(
      <>
        
        <div className="checkbox_container">
        <div style={{fontWeight:600}}>Vaccine type:</div>
          <div className="checkbox">
            <input  name="COVAXIN" onChange={handleVaccines} type="checkbox" class="btn-check vaccine" id="btn-check-outlined1" autocomplete="off" checked={vaccineFilter.covaxin}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined1">Covaxin</label>
          </div>

          <div className="checkbox">
            <input name="COVISHIELD" onChange={handleVaccines} type="checkbox" class="btn-check vaccine" id="btn-check-outlined2" autocomplete="off" checked={vaccineFilter.covishield}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined2">Covishield</label>
          </div>

          
          <div className="checkbox">
            <input name="SPUTNIKV" onChange={handleVaccines} type="checkbox" class="btn-check vaccine" id="btn-check-outlined3" autocomplete="off" checked={vaccineFilter.sputnikV}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined3">Sputnik V</label>
          </div>
          <div style={{fontWeight:600}}>Age group:</div>
          <div className="checkbox">
            <input name="18ANDABOVE" onChange={handleAgeGroups}  type="checkbox" class="btn-check ageGroup" id="btn-check-outlined4" autocomplete="off" checked={ageGroupFilter.eighteenAndAbove}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined4">18 and above</label>
          </div>

          <div className="checkbox">
            <input name="45ANDABOVE" onChange={handleAgeGroups}  type="checkbox" class="btn-check ageGroup" id="btn-check-outlined5" autocomplete="off" checked={ageGroupFilter.fortyFiveAndAbove}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined5">45 and above</label>
          </div>

          <div className="checkbox">
            <input name="18TO44ONLY" onChange={handleAgeGroups}  type="checkbox" class="btn-check ageGroup" id="btn-check-outlined6" autocomplete="off" checked={ageGroupFilter.eighteenToFortyFourOnly}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined6">18-44 only</label>
          </div>

          <div style={{fontWeight:600}}>Cost:</div>
          <div className="checkbox">
            <input name="FREE" onChange={handleFeeType}  type="checkbox" class="btn-check feeType" id="btn-check-outlined7" autocomplete="off" checked={feeTypeFilter.free}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined7">Free</label>
          </div>
          <div className="checkbox">
            <input name="PAID" onChange={handleFeeType}  type="checkbox" class="btn-check feeType" id="btn-check-outlined8" autocomplete="off" checked={feeTypeFilter.paid}/>
            <label class="btn btn-outline-primary" for="btn-check-outlined8">Paid</label>
          </div>
          
        </div>
        <br/>
        
      </>
    )
  }
export default CategoryCheckbox;
