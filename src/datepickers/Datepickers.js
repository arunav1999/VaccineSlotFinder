import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';;

const Datepickers = () =>
{
    var today = new Date();
    var date_buttons = [];
    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    date_buttons.push(
        <div className="bs">
            <button type="button" class="btn btn-info">{day}-{month}-{year}</button>
        </div>
    );
    for(let i=0;i<3;i++)
    {
        today.setDate(today.getDate()+1);
        var day = today.getDate();
        var month = today.getMonth()+1;
        var year = today.getFullYear();
        date_buttons.push(
            <div className="bs">
                <button type="button" class="btn btn-info">{day}-{month}-{year}</button>
            </div>
        );
    }
    render()
    {
        return(
            <>
            <div className="dropdown_aligner">Choose between dates</div>
            <div className="date_picker_container">
                <div className="inside_datepicker_container">
                    <div className="date_pickers">
                        {date_buttons}
                    </div>
                </div>
            </div>
            </>
        )
    }

}
export default Datepickers;