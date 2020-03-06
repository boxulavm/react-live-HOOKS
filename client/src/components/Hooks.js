import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import Doughnut from './Doughnut';
import Bar from './Bar';
import Line from './Line';
import Pie from './Pie';
import Icons from './Icons';
import ProgressBars from './ProgressBars';


const Hooks = () => {
    const [counter, setCounter] = useState(1);
    const [numbers, setNumbers] = useState([]);
    const [oddNums, setOdd] = useState(0);
    const [evenNums, setEven] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {

    //         let i = Math.floor(Math.random() * 100) + 1;

    //         setCounter(counter => i)

    //         if (numbers.length < 15) {
    //             setNumbers(numbers => [...numbers, i])
    //         } else {
    //             setNumbers(numbers => [...numbers, i].slice(Math.max(numbers.length - 15, 0)))
    //         }

    //         if (i % 2 === 1) {
    //             setOdd(oddNums => oddNums + 1);
    //         } else {
    //             setEven(evenNums => evenNums + 1);
    //         }

    //     }, 2000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    useEffect(() => {

        const socket = socketIOClient('http://127.0.0.1:5000');

        socket.on("FromAPI", data => logResponse(data));

    }, []);

    const logResponse = (i) => {
        setCounter(counter => i)

        if (numbers.length < 15) {
            setNumbers(numbers => [...numbers, i])
        } else {
            setNumbers(numbers => [...numbers, i].slice(Math.max(numbers.length - 15, 0)))
        }

        if (i % 2 === 1) {
            setOdd(oddNums => oddNums + 1);
        } else {
            setEven(evenNums => evenNums + 1);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <Icons number={oddNums + evenNums} />
                <Doughnut number={counter} />
                <Bar number={counter} />
                <Line numbers={numbers} />
                <Pie odd={oddNums} even={evenNums} />
                <ProgressBars number={counter} />
            </div>
        </div>
    );
};

export default Hooks;