import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Live extends Component {
    constructor() {
        super();
        this.state = {
            response1: false,
            response2: false,
            response3: 0,
            podaci: '',
            endpoint: "http://127.0.0.1:5000"
        };
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);

        socket.on("FromAPI", data => this.logovanje(data));

        // this.setState({ response: data })
    }

    logovanje(d) {
        this.setState({ podaci: d })
        console.log(this.state.podaci)
        switch (this.state.podaci) {
            case 5:
                this.setState({ response1: this.state.podaci })
                break;
            case 10:
                this.setState({ response2: this.state.podaci })
                break;
            default:
                break;
        }
    }


    render() {
        const { response1, response2, response3 } = this.state;

        return (
            <div>
                {response1
                    ? <p>
                        Response 1: {response1}<br></br>
                        Response 2: {response2}<br></br>
                        Response 3: {response3}<br></br>
                    </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}

export default Live;