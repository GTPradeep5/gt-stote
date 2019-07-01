import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from'./components/Welcome'
import FIne from './components/FIne'
import Message from './components/Message'
import Counter from './components/Counter'
import Calc from './components/Calc'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Click from './components/Click'
import Parentcompo from './components/Parentcompo'
import Usergreet from './components/Usergreet'
import Namelist from './components/Namelist'
import Stsheet from './components/Stsheet'
import Insty from './components/Insty'
import Done from './components/Done'


class App extends Component {
  render(){
    return (
    <div className="App">
     <Stsheet dummy={true} fun='Eye of the tiger'/>
     <div className='sor'>

     <div className='main-content'>
     <Greet name='bane' sname='bane bruse'> 
      <p> Sorry bane is the villen </p>
     </Greet>
     <Greet name='super man' sname='clark'>     
     <button> Action time</button>
     </Greet>
     <Greet name='batman' sname='snacks'/>

     <Welcome name='bulk' sname='hulk'/>
     <Welcome name='cap' sname='captain america'/>
     <FIne/>
     <Message />
     <Counter/>
     <Calc/>
     <FunctionClick/>
     <ClassClick/>
     <br/>
     <Click/>
     <br/>
     <Parentcompo/>
     <br/>
     <Usergreet/>
     <br/>
     <Namelist/>
     <br/>
     <br/><br/><br/><br/><br/>
    <Insty/>

     </div>

     </div>
    </div>
    )
  }
}

export default App;
