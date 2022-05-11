import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        return(
            <Nav>
                <NavItem>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/new" className="nav-link">Create Listing</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/index" className="nav-link">Check Apartments</NavLink>
                </NavItem>
                {logged_in &&
                    <NavItem>
                        <a
                        href={sign_out_route}
                        className='nav-link'
                        >
                        Sign Out
                        </a>
                    </NavItem>
                }
                {!logged_in &&
                    <NavItem>
                        <a
                        href={new_user_route}
                        className='nav-link'
                        >
                        Sign Up
                        </a>
                    </NavItem>
                }
                {!logged_in &&
                    <NavItem>
                        <a
                        href={sign_in_route}
                        className='nav-link'
                        >
                        Log In
                        </a>
                    </NavItem>
                }
            </Nav>
        )
    }
}