import React,{useState,useEffect} from 'react'

import Navbar from '../navbar/Navbar'
import CategoryCheckbox from '../checkbox/CategoryCheckbox'
import Dropdowns from '../dropdowns/Dropdowns'
import Cards from '../cards/Cards'
import { render } from '@testing-library/react';
import Datepickers from '../datepickers/Datepickers'
import CardsContainer from '../cardscontainer/CardsContainer'
import './styles.css'


const AppComponent = () =>{

    const [stateId, setStateId] = useState(0);
    const [districtId, setDistrictId] = useState(0);
    const [filters, setFilters] = useState({});
    const [date, setDate] = useState("");

    
    return(
        <React.Fragment>
            <Navbar/>
            <h1 className="dropdown_aligner filters_heading">Filters:</h1>
            <h6 className="dropdown_aligner filters_sub_heading">Please select all the filters</h6>
            <CategoryCheckbox setFilters={setFilters}/>
            <Dropdowns setStateId={setStateId} setDistrictId={setDistrictId}/>
            <Datepickers setDate={setDate}/>
            <CardsContainer stateId={stateId} districtId={districtId} filters={filters} date={date}/>
        </React.Fragment>
    )
    
};

export default AppComponent;
