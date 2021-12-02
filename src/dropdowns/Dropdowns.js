import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom'





const Dropdowns = () =>
{
    const [states, setStates] = useState([]);
    const [districts_of_chosen_state,setDistrictsForChosenState] = useState([]);
    const [chosen_state_id,setChosenStateId] = useState(0);

    useEffect(() => {
        fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states').then(res => {
          res.json().then(res => {
            const states = res.states;
            setStates(states);

          });
        });
      }, []);

    useEffect(() => {
    fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+chosen_state_id).then(res => {
        res.json().then(res => {
        const districts = res.districts;
        setDistrictsForChosenState(districts);
        });
    });
    }, [chosen_state_id]);
    
    states.forEach((state) => {
        document.getElementById("states_dropdown").innerHTML+=(`<option value="${state.state_name}">${state.state_name}</option>`)
    });

    useEffect(() => {
        districts_of_chosen_state.forEach((district) => {
            document.getElementById("districts_dropdown").innerHTML+=(`<option value="${district.district_name}">${district.district_name}</option>`)
        });
    },[districts_of_chosen_state]);
    
    
    function getStateIdForState(for_state)
    {
        var id;
        states.forEach((s) => {
            if(s.state_name == for_state)
            {
                id = s.state_id
                return false;
            }
        })
        return id;
    }
    const handleChangeForState = (e) =>
    {
        var chosen_state_name = document.getElementById("states_dropdown").value;
        document.getElementById("states_dropdown").value = chosen_state_name;
        document.getElementById("districts_dropdown").innerHTML = ``;
        var state_id = getStateIdForState(chosen_state_name)
        setChosenStateId(state_id)
        
    }
    
    render()
    {
        return(
            <>
               <div className="dropdown_aligner">
               <div className="dropdown_container">
                   <div className="dropdown">
                        <div>
                            <select onChange={(e) => handleChangeForState(e)} id="states_dropdown" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>State</option>
                            </select>
                        </div>  

                        <div>
                            <select id="districts_dropdown" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>District</option>
                                
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