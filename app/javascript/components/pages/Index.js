import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardImg } from 'reactstrap'

export default class Index extends Component {
    render() {
        let { apartments } = this.props
        return(
            <div>
                <h1>hello</h1>
                {apartments.map((value) => {
                    return (
                        <Card key={value.id}>
                            <NavLink to={`/show/${value.id}`}>
                            <CardImg
                                alt='image'
                                src={value.image}
                            />
                            </NavLink>
                        </Card>
                    )
                })}
            </div>
        )
    }
}