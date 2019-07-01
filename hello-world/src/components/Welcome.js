import React, {Component} from 'react';

class Welcome extends Component{
    render()
    {
        return <h1><u>Hellow {this.props.name} also {this.props.sname}</u></h1>
    }
}

export default Welcome