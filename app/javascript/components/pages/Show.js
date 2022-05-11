import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        return(
            <>
                <h1>Show</h1>
                {this.props.apartment.street}
            </>
        )
    }
}