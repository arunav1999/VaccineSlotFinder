import { render } from '@testing-library/react';
import React from 'react';
import {useState, useEffect} from 'react';
import Cards from '../cards/Cards'
import {getAvailabilityByDistrict} from '../../utils/Utility'
import './styles.css'

const CardsContainer = (props) =>
{
  const [carData, setCardData] = useState([])
  
  useEffect(() => {
    var did = props.districtId === 0 ? 512 : props.districtId
    var dt = props.date === '' ? '31-03-2021' : props.date
    getAvailabilityByDistrict(did, dt)
    .then((res) => {
      setCardData(res.sessions)
    })
  }, [props.stateId ,props.districtId, props.date])
  return(
    <div className="result_card_container">
      {
        
        carData.map((data) => 
          <Cards {...data}/>
        )
      }
    </div>
  );
  
} 
export default CardsContainer;