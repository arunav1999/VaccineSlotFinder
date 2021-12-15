import { render } from '@testing-library/react';
import React from 'react';
import {useState, useEffect} from 'react';
import Cards from '../cards/Cards'
import {getAvailabilityByDistrict} from '../../utils/Utility'
import {getFilteredResults} from '../../utils/FilterSetter'
import './styles.css'

const CardsContainer = (props) =>
{
  const [carData, setCardData] = useState([])
  
  useEffect(() => {
    var did = props.districtId === 0 ? 512 : props.districtId
    var dt = props.date === '' ? '31-03-2021' : props.date
    getAvailabilityByDistrict(did, dt)
    .then((res) => {
      setCardData(getFilteredResults(props.filters, res.sessions))
    })
  }, [props.stateId ,props.districtId, props.date, props.filters])
  return(
    <div className="result_card_container">
      {
        carData.length === 0 ? <div>No availability for the chosen criteria</div> :
        carData.map((data) => 
          <Cards {...data}/>
        )
      }
    </div>
  );
  
} 
export default CardsContainer;