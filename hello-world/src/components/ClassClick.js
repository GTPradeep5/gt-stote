import React, {Component} from 'react'

class ClassClick extends Component{

    funn()
    {
        console.log('sorry clicked')
    }

    render(){
        return(
            <div>
                <button onClick={this.funn}> Click hi hello</button>
            </div>
        )
    }
}
export default ClassClick