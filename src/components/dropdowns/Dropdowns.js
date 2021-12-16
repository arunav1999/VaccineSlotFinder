import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom'
import Datepickers from '../datepickers/Datepickers';



const getStatesData = () => {
    return fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        .then(response => response.json())
        .then(res => {
            return res.states
        })
        .catch(err => {
            console.log('Error message in state data', err)
            return [];
        })
}

const getDistrictData = (id) => {
    return fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`)
        .then(response => response.json())
        .then(res => {
            console.log('District Data Response', res)
            return res.districts
        })
        .catch(err => {
            console.log('Error message in district data', err)
            return [];
        })
}

const Dropdowns = (props) =>
{
    const [states, setStates] = useState([]);
    const [districts,setDistricts] = useState([]);

    //Add comment here
    const [state, setState] = useState({ stateId: 0, districtId: 0 });

    useEffect(() => {
        getStatesData()
            .then(statesData => {
                setStates(statesData)
            })
      }, []);
    
    useEffect(() => {
        props.setStateId(state.stateId);
        props.setDistrictId(state.districtId);
    },[state])
    
    const handleChange = (e) =>
    {
        const propValue = e.target.value;
        const propName = e.target.name;

        const newState = { ...state, [propName]: propValue };

        setState(newState)
        
        if (propName === 'stateId') {
            getDistrictData(propValue)
            .then(districts =>{
                setDistricts(districts)
            })
        }
    }

    
   
    return(
        <>
            <div className="dropdown_aligner">
            <div className="dropdown_container">
                <div className="dropdown">
                    {
                        states.length > 0 && 
                        <div>
                        <select value={state.stateId} onChange={handleChange} name="stateId" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option value="0">State</option>
                            {   
                                states.map(({state_id,state_name}) => {
                                    return <option value={state_id}>{state_name}</option>
                                })
                            }
                        </select>
                    </div>
                    }
                    

                    {
                        districts.length > 0 && 
                        <div>
                        <select value={state.districtId} onChange={handleChange} name="districtId" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option value="0">District</option>
                            {   
                                districts.map(({district_id, district_name}) => {
                                    return <option value={district_id}>{district_name}</option>
                                })
                            }
                        </select>
                    </div> 
                    }   
                    
                </div>
            </div>
            </div>
            
        </>
    );
    
}
export default Dropdowns;