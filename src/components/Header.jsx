import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
        <div className="bg-white border-bottom shadow-sm mb-4">
        <div className="container">
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                <h5 className="my-0 mr-md-auto font-weight-normal">React Events</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="/#">Nav 1</a>
                    <a className="p-2 text-dark" href="/#">Nav 2</a>
                </nav>
                <a className="btn btn-outline-primary" href="/#">Sign up</a>
            </div>
        </div>
        </div>
        )
    }
}

export default Header
