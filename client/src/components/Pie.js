import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieComponent = (props) => {
    return (
        <div className="col-md-4 bg-secondary pt-5 my-4">
            <Pie
                data={
                    {
                        labels: ['odd', 'even'],
                        datasets: [
                            {
                                data: [
                                    props.odd,
                                    props.even
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


export default PieComponent;