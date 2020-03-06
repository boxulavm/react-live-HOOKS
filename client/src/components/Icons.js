import React from 'react';

const icons = (props) => {
    return (
        <>
            <div className='col-md-2 bg-light shadow-lg p-3'>
                <i className="far fa-user text-primary pr-3"></i>
                {props.number + 2345}
            </div>

            <div className='col-md-2 bg-light shadow-lg p-3'>
                <i className="fas fa-thumbs-up text-info pr-3"></i>
                {props.number + 43123}
            </div>

            <div className='col-md-2 bg-light shadow-lg p-3'>
                <i className="fas fa-shopping-cart text-warning pr-3"></i>
                {props.number + 5234}
            </div>

            <div className='col-md-2 bg-light shadow-lg p-3'>
                <i className="fas fa-eye text-white pr-3"></i>
                {props.number + 125123}
            </div>

            <div className='col-md-2 bg-light shadow-lg p-3'>
                <i className="fas fa-arrows-alt text-danger pr-3"></i>
                {props.number + 12}
            </div>

            <div className='col-md-2 bg-light shadow-lg p-3'>
                <i className="fas fa-sync text-success pr-3"></i>
                {props.number}
            </div>

        </>
    )
}


export default icons;