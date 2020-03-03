import React from 'react';

const icons = (props) => {
    return (
        <>
        <div className='col-md-3 bg-light shadow-lg p-3'>
            <i className="far fa-user text-primary pr-3"></i>
            {props.number+2345}
        </div>

        <div className='col-md-3 bg-light shadow-lg p-3'>
            <i className="fas fa-thumbs-up text-info pr-3"></i>
            {props.number+43123}
        </div>

        <div className='col-md-3 bg-light shadow-lg p-3'>
            <i className="fas fa-shopping-cart text-warning pr-3"></i>
            {props.number+5234}
        </div>

        <div className='col-md-3 bg-light shadow-lg p-3'>
            <i className="fas fa-eye text-white pr-3"></i>
            {props.number+125123}
        </div>
        </>
    )
}


export default icons;