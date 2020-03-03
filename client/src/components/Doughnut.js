import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const hookChild = (props) => {
    return (
        <div className="col-md-6">
            <Doughnut
                data={
                    {
                        labels: ['Success', 'Fail'],
                        datasets: [
                            {
                                data: [
                                    props.number,
                                    '12'
                                ],
                                backgroundColor: [
                                    'rgba(119, 179, 0, 1)',
                                    'rgba(204, 0, 0, 1)'
                                ]
                            }
                        ]
                    }
                }
                options={{
                    title: {
                        fontSize: 25
                    },
                }}
            />
        </div>
    )
}


export default hookChild;