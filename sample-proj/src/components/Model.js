import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from  '../Context'
import {Buttoncon} from './Button'
import {Link} from 'react-router-dom'

export default class Model extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                        const {modelOpen,closeModel} = value;
                        const {img,title,price} = value.modelProduct;
                        if(!modelOpen){
                            return null
                        }
                        else{
                            return(
                            <ModelCon>
                                <div className='container '>
                                    <div className='row>'>
                                        <div id='model' className='border border-primary p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                            <h5>item added to the cart</h5>
                                            <img src={img} className='img-fluid' alt='product'/>
                                            <h5>{title}</h5>
                                            <h5 className='text-muted' >price : $ {price}</h5>
                                            <Link to='/'>
                                                <Buttoncon onClick={()=>closeModel()}>
                                                    Continue Shopping
                                                </Buttoncon>
                                            </Link>
                                            <Link to='/cart'>
                                                <Buttoncon cart onClick={()=>closeModel()}>
                                                    Go to Cart
                                                </Buttoncon>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModelCon>);
                        }   
                    }
                }
            </ProductConsumer>
        )
    }
}

const ModelCon = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model{
    background: var(--mainwhite);
}
`