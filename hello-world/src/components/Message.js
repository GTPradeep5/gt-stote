import React, {Component} from 'react'

class Message extends Component
{
    constructor()
    {
        super()
        this.state= {
            message: 'Hellow pradeep, Welcome to React'
        }
    }

    changena()
    {
        this.setState(
            {message: 'Thamks for Subscribing'}
        )
    }


    render()
    {
        return(
        <div>
            <h1> {this.state.message} </h1>
            <button onClick = {() => this.changena()}> Suscribe</button>
        </div>
        )
    }
}

export default Message 