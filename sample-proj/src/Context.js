import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext =React.createContext();
// two para provider and consumer

class ProductProvider extends Component {
    state = {
        products:[],  //dynamic so make copy
        detailProduct: detailProduct, // static no copy needed
        cart : [],
        modelOpen : false,
        modelProduct :detailProduct,
        cartSubTotal : 0,
        cartTax:0,
        cartTotal:0
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = ()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>
            {
                const singleItem = {...item}; // copy value
                tempProducts=[...tempProducts,singleItem]
            })
            this.setState(()=>{
                return{products:tempProducts}
            })
    }
    
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }


    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addtocart = id =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;    
        
        this.setState(()=>
            {
                return {product:tempProducts, cart:[...this.state.cart, product]}
            }, ()=> {this.addTotals()}
        )
    }
    openModel = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modelProduct:product,modelOpen:true}
        })
    }
    closeModel = () =>{
        this.setState(()=>{
            return{modelOpen:false}
        })
    }

    increment = (id) =>{
        let tempcart = [...this.state.cart];
        const selectedprod = tempcart.find(item=> item.id===id);
        const index = tempcart.indexOf(selectedprod);
        const prod = tempcart[index];
        prod.count = prod.count +1;
        prod.total = prod.count * prod.price;
        this.setState(()=>{
            return{
                cart:[...tempcart]
            }
        },()=>this.addTotals())
    }

    decrement = (id) =>{
        let tempcart = [...this.state.cart];
        const selectedprod = tempcart.find(item=> item.id===id);
        const index = tempcart.indexOf(selectedprod);
        const prod = tempcart[index];
        prod.count = prod.count -1;
        if(prod.count === 0){
            this.removeItem(id)
        }
        else{
            prod.total = prod.count * prod.price;
        this.setState(()=>{
            return{
                cart:[...tempcart]
            }
        },()=>this.addTotals())
        }
    }

    removeItem = (id) =>{
        let tempprod = [...this.state.products];
        let tempcart = [...this.state.cart];
        tempcart=tempcart.filter(item => item.id !== id)

        const index = tempprod.indexOf(this.getItem(id));
        let removedprod = tempprod[index];
        removedprod.inCart= false;
        removedprod.count = 0;
        removedprod.total = 0;
        this.setState(()=>{
            return{
                cart:[...tempcart],
                products:[...tempprod]
            }
        }, ()=>{this.addTotals()})
    }

    clearCart = () =>{
        this.setState(()=>{
            return{cart:[]}
        },()=>{
            this.setProducts();//give new copies
            this.addTotals()
        })
    }

    addTotals = () =>{
        let subtotal = 0;
        this.state.cart.map(item=> (subtotal += item.total));
        const temptax =subtotal * 0.1;
        const tax = parseFloat(temptax.toFixed(2));
        const total = subtotal+ tax;
        this.setState(()=>{
            return {
                cartSubTotal: subtotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }


    render() {
        return (
            <ProductContext.Provider 
            value={{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addtocart:this.addtocart,
                    openModel: this.openModel,
                    closeModel:this.closeModel,
                    increment:this.increment,
                    decrement:this.decrement,
                    removeItem:this.removeItem,
                    clearCart:this.clearCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};