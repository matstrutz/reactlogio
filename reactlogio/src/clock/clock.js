import React, { Component } from 'react';

import api from '../hourapi/api'

export default class Main extends Component {
    response;

    componentDidMount() {
        this.getHour();
    };

    getHour = async () => {
        this.response = await api.get();

        console.log(this.response);
    };

    render(){
        const response = this.response;

        return (
            <div>
                <h1> {response} </h1>
            </div>
        )
    }
}