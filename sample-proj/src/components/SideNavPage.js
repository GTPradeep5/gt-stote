import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Productlist from './Productlist'
import Details from './Details'
import Cart from './cart'
import Default from './Default'
import Model from './Model'
import {Link} from 'react-router-dom'
import {Buttoncon} from './Button'
import logo from '../fin.svg'
import styled from 'styled-components'

export default class SideNavPage extends Component {

    state={
        on: true
    }

    open = () =>{
        document.getElementById('side-menu').style.width='200px';
        document.getElementById('mainmen').style.marginLeft='200px';
    }

    close = () =>{
        document.getElementById('side-menu').style.width='0px';
        document.getElementById('mainmen').style.marginLeft='0px';
    }



    render() {
        
        return (
        <div> {/*

        <nav className='navbar'>
            <span className='open-slide'>
                <a href='#' onClick={this.open}>
                    <i className='fa fa-user whit'></i>
                </a>
            </span>
            <ul className='navbar-nav'>
            <li><a href='#'>Home</a>
            <a href='#'>Services</a>
            <a href='#'>About</a>
            <a href='#'>Contacts</a></li>
        </ul>
        </nav>*/}
            
            <Navwrap className='navbar navbar-expand-sm navbar-dark px-sm-3' >

            
            <img src={logo} alt='store' className='navbar-brand ml-3 ' onClick={this.open}/>
            


            <ul className='navbar-nav align-items-center'>
            
            <li className='nav-item1 ml-4'>
            <Link to='/' className='nav-link'>
                products
            </Link>
            </li>
            <li className='nav-item1 ml-5'>
            <Link to='/Cart' className='nav-link'>
                cart
            </Link>
            </li>
            </ul>

            <Link to='/Cart'className='ml-auto'>
            <Buttoncon > 
                <span className='mr-2'>
                <i className='fas fa-cart-plus'/>
                </span>
                 my cart
            </Buttoncon>
            </Link>

            </Navwrap>

            
            
        

        <div id='side-menu' className='side-nav'>
                    
            <a href='#' className='btn-close' onClick={this.close}>&times;</a>
            <a href='#'>Home</a>
            <a href='#'>Contact</a>
            <a href='#'>Features</a>
            <a href='#'>Feedback</a>
        </div>

        <div id='mainmen'>
        <div className='main-content' id='main'>
      <Switch> 
        <Route exact path="/" component={Productlist}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
        <Model/>
      </div>
        </div>
        </div>)

        
          }  
}

const Navwrap = styled.nav`
background: var(--mainblue);
.nav-link{
    color: var(--yello) !important;
    font-size:1.3rem;
    text-transform:capitalize ;
}
border-bottom: 2px solid var(--lightblue)

.navbar-brand{
    cursor: pointer;
}
`
