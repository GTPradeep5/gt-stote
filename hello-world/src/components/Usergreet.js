import React, {Component} from 'react'

class Usergreet extends Component
{
    constructor()
    {
        super()
        this.state = {
            islogged : true
        }
    }
    render()
    {
        return(
            this.state.islogged && <div> Hello gt</div>
        )
    }
}
export default Usergreet