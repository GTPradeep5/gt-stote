import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className='conatiner'>
                    <div className='row'>
                        <div className='col-10 mx-auto text-center text-uppercase text-title pt-5'>
                            <h1 className='display-3' >404</h1>
                            <h1>error</h1>
                            <h2>page not found</h2>
                            <h3> the requested URL for <span className='text-danger'>
                                {this.props.location.pathname}</span> not found
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
