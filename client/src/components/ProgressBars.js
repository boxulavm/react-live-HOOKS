import React from 'react';

const Progres = (props) => {

    let num1 = (props.number / 1.1).toFixed(1);
    let num2 = (props.number / 0.5).toFixed(1);
    let num3 = (props.number / 1.15).toFixed(1);


    return (
        <>
            <div className="col-md-12 bg-secondary">
                <table className="table">
                    <thead className="thead-dark text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Percent</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td >1</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${num1}%` }} aria-valuenow={num1} aria-valuemin="0" aria-valuemax="100">{num1}%</div>
                                </div>
                            </td>
                            <td>{num1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${num2 / 2}%` }} aria-valuenow={num2} aria-valuemin="0" aria-valuemax="200">{num2 / 2}%</div>
                                </div>
                            </td>
                            <td>{num2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${num3}%` }} aria-valuenow={num3} aria-valuemin="0" aria-valuemax="100">{num3}%</div>
                                </div>
                            </td>
                            <td>{num3}</td>
                        </tr>
                    </tbody>
                </table>



            </div>
        </>
    )
}


export default Progres;