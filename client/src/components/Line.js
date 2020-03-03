import React from 'react';
import { Line } from 'react-chartjs-2';


const LineComponent = (props) => {
    return (
        <div className="col-md-8 pt-5 bg-secondary p-2 text-white my-4">
            <Line
                data={
                    {
                        labels: props.numbers,
                        steppedLine: true,
                        datasets: [
                            {
                                data: props.numbers,
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


export default LineComponent;