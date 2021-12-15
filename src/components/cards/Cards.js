import { render } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';
import './styles.css'

const Cards = ({
            center_id,
            name,
            address,
            state_name,
            district_name,
            block_name,
            pincode,
            from,
            to,
            lat,
            long,
            fee_type,
            session_id,
            date,
            available_capacity,
            available_capacity_dose1,
            available_capacity_dose2,
            fee,
            min_age_limit,
            vaccine
}) =>
{
  render()
  {
    return(
      <>
        <div className="dropdown_aligner">
               <div className="dropdown_container">
                   <div className="dropdown">

                   <div className="card_container">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Address: {address}</h6>
                                <p class="card-text"><span style={{fontWeight:'bold'}}>Vaccine: </span>{vaccine}</p>
                                <p class="card-text"><span style={{fontWeight:'bold'}}>Available Dose 1: </span>{available_capacity_dose1}</p>
                                <p class="card-text"><span style={{fontWeight:'bold'}}>Availabe Dose 2: </span>{available_capacity_dose2}</p>
                                {
                                  fee_type === 'Free' ? <p class="card-text" style={{color:"green"}}><span style={{fontWeight:'bold',color:'black'}}>Paid/Free: </span>{fee_type}</p> :
                                                        <p class="card-text" style={{color:"red"}}><span style={{fontWeight:'bold',color:'black'}}>Paid/Free: </span>{fee_type}</p>
                                }
                                

                            </div>
                        </div>

                    </div>
                   </div>
                </div>
               </div>
      </>
    );
  }
} 
export default Cards;
