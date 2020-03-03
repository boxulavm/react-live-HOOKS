import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarComponent = (props) => {
    return (
        <div className="col-md-6">
            <Bar
                data={
                    {
                        labels: ['Success', 'Fail', ''],
                        datasets: [
                            {
                                data: [
                                    props.number,
                                    '12',
                                    '0.1'

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


export default BarComponent;