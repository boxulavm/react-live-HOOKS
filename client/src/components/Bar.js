import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarComponent = (props) => {
    return (
        <div className="col-md-7 bg-secondary mt-4 mb-2">
            <Bar
                data={
                    {
                        labels: ['Success', 'Fail', 'Minus', '10', 'MAX'],
                        datasets: [
                            {
                                data: [
                                    props.number,
                                    props.number + 12,
                                    '-10',
                                    '10',
                                    props.number + 30

                                ],
                                backgroundColor: [
                                    'rgba(119, 179, 0, 1)',
                                    '#FF8800',
                                    'rgba(204, 0, 0, 1)',
                                    '#fff',
                                    '#212121'
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