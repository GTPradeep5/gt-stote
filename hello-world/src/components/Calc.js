import React, {Component} from 'react'

class Calc extends Component{

    constructor()
    {
        super()
        this.state = {
            count1 : 0,
            count2 : 0
        }
    }

    increment1()
    {
        this.setState(
            {count1 : this.state.count1+1}
        )
        
    }

    increment2()
    {
        this.setState(
            {count2 : this.state.count2+1}
        )
        
    }

    add()
    {
        this.setState(
            {
                count3 : this.state.count1 + this.state.count2
            }
        )
    }

    render(){

        return(
            <div>
                <h1>Value 1 : {this.state.count1}  <button onClick={()=>this.increment1()}> Increment </button></h1>
                <h1>Value 2 : {this.state.count2}  <button onClick={()=>this.increment2()}> Increment </button></h1>
                <button onClick = {()=>this.add()}> Addition </button>
                <h1>Answer : {this.state.count3}</h1>
                
            </div>
        )
    }

}

export default Calc