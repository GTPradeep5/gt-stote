import React, {Component} from 'react'
import Childcompo from './Childcompo'

class Parentcompo extends Component
{
    constructor(){
        super()
        this.state={
            parent: 'Parent component'
        }
        this.par = this.par.bind(this)
    }
    par(cname)
    {
        alert(`Hello ${this.state.parent} from ${cname}`)
    }

    render(){
        return(
            <div>
                <Childcompo happar={this.par}/>
            </div>

        )
    }
}
export default Parentcompo