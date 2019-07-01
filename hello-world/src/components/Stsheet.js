import React from 'react'
import './mystyle.css'


function Stsheet (props){

    //let cn=props.dummy ? 'makeup' : ''
    return (
        <div>
            <body>
                <div className='header'>
                    <a href='#' className='nav-trigger'><span></span></a>
                </div> 

                <div className='side-nav'>
                    <nav>
                        <ul>
                            <li>
                                <a href='#'>
                                    <span> <i className='fa fa-user'></i></span>
                                    <span>User</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span> <i className='fa envelope'></i></span>
                                    <span>Message</span>
                                </a>
                            </li>
                            <li className='active'>
                                <a href='#'>
                                    <span> <i className='fa bar-chart'></i></span>
                                    <span>Analtics</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span> <i className='fa fa-credit-card-alt'></i></span>
                                    <span>payments</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='main-content'>
                    Responive dashboard
                    
                </div>

            </body>                
        </div>        
    )
}

export default Stsheet