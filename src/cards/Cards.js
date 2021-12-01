import { render } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';

const Cards = () =>
{
  render()
  {
    return(
      <>
        <div className="dropdown_aligner">
               <div className="dropdown_container">
                   <div className="dropdown">

                   <div className="card_container">
                   <h1 className="dropdown_aligner">Results:</h1>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Navyug School Mandir Marg S-2</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Navyug Senior Secondary School Mandir Marg Willson Square Gole Market New Delhi Delhi</h6>
                                <p class="card-text"><span style={{fontWeight:'bold'}}>Vaccine: </span>Covaxin</p>
                                <p class="card-text"><span style={{fontWeight:'bold'}}>Available Dose 1: </span>48</p>
                                <p class="card-text"><span style={{fontWeight:'bold'}}>Availabe Dose 2: </span>58</p>
                                <p class="card-text" style={{color:"green"}}><span style={{fontWeight:'bold',color:'black'}}>Paid/Free: </span>Free</p>
                                

                
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
