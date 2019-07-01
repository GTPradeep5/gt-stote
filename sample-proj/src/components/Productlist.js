import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../Context'

export class Productlist extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container' >
                        <Title name='our' title='products'/>
                        <div className='row'>
                            <ProductConsumer>                                
                                {
                                    hello=>{
                                        return hello.products.map(product => {
                                            return <Product key={product.id} product={product}/>
                                        });
                                    }
                                }
                            </ProductConsumer>
                        </div>                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Productlist
