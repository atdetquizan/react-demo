import React from 'react';

export default class Edad extends React.Component {
    constructor({ props }) {
        super(props);
    }
    render() {
        return +this.props.años >= 18 ? <div>Mayor de Edad</div> : <div>Menor de Edad</div>
    }
}