import React,{useState,useEffect} from 'react'

import Navbar from '../navbar/Navbar'
import CategoryCheckbox from '../checkbox/CategoryCheckbox'
import Dropdowns from '../dropdowns/Dropdowns'
import Cards from '../cards/Cards'
import { render } from '@testing-library/react';
import Datepickers from '../datepickers/Datepickers'
import CardsContainer from '../cardscontainer/CardsContainer'



const AppComponent = () =>{

    const [stateId, setStateId] = useState(0);
    const [districtId, setDistrictId] = useState(0);
    const [filters, setFilters] = useState({});
    const [date, setDate] = useState("");

    render()
    {
        return(
            <React.Fragment>
                <Navbar/>
                <CategoryCheckbox setFilters={setFilters}/>
                <Dropdowns setStateId={setStateId} setDistrictId={setDistrictId}/>
                <Datepickers setDate={setDate}/>
                <CardsContainer stateId={stateId} districtId={districtId} filters={filters} date={date}/>
            </React.Fragment>
        )
    }
};

export default AppComponent;
