import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../fin.svg'
import styled from 'styled-components'
import {Buttoncon} from './Button'

class Mainbar extends Component{
    render()
    {
        return(
            <Navwrap className='navbar navbar-expand-sm navbar-dark px-sm-3 '>

            <Link to='/'>
            <img src={logo} alt='store' className='navbar-brand'/>
            </Link>


            <ul className='navbar-nav align-items-center'>
            <li className='nav-item1'>
            <Link to='/' className='nav-link ml-0'>
                G.T. store
            </Link>
            </li>
            <li className='nav-item1 ml-5'>
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
        );
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
`

const din = {
    fontColor:'yellow'

}

export default Mainbar