import React, {Component} from 'react'

class Click extends Component
{
    constructor(){
        super()
        this.state = {
            mesage: "Hello, Welcome"
        }
        this.clic = this.clic.bind(this)
    }

    /*clic()
    {
        this.setState(
            {
                mesage:'Bye, Thank you'
            }
        )
    }*/

    clic = () =>{
        this.setState(
            {
                mesage:'Bye, Thank you'
            }
        )
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.mesage}</h1>
                <button onClick={this.clic}> Please click here</button>
            </div>
        )
    }
    //------>1 onClick={this.clic.bind(this)
    //------>2  this.clic = this.clic.bind(this)
    //------>3 <button onClick = {()=> this.increment()}> Please click here </button>
    //------>4 
}

export default Click