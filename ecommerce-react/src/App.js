import React, { Component } from 'react';
import './App.css';
import Product from  './Product.js';
import Filtering from './Filtering';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.state = {
            itemsInCart: [],
        };
    }
    componentDidMount() {
        this.getProducts();
        let itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));
        this.setState({
            itemsInCart,
        })

    }

    getProducts(sortOnPrice=false) {
        let append = "";

        if (sortOnPrice === 0) {
            //append = "?_sort=Price:asc";
            append = "&sort[Price]=1";
        }
        if (sortOnPrice === 1) {
            //append = "?_sort=Stock:asc";
            append = "&sort[Stock]=1";
        }
        if (sortOnPrice === 2) {
            //append = "?_sort=Category:asc";
            append = "&sort[Category]=1";
        }

        fetch("http://192.168.99.100:8083/api/collections/get/Products?token=account-f71e27ff51498b0fff2224685b1969"+append)
            .then((collections) => collections.json())
            .then((data) => {
                this.setState({
                    products: data.entries,
                });
            })
    }

    sortProducts(index) {
        this.getProducts(index)
    }

    updateCart(itemsInCart) {
        this.setState({
            itemsInCart,
        })
    }
    render() {
        if(!this.state.products) {
            return null;
        }

        const prodList = this.state.products.map((product) => {
            return <Product addToCart={(ev) => this.updateCart(ev) } product={product} />;
        });
        const itemsInCart = this.state.itemsInCart;



        return (
            <div>

                <h1>Welcome</h1>
                <Filtering onToggleSort={this.sortProducts.bind(this)}/>
                <p>Items in cart: {(itemsInCart && itemsInCart.length) ? itemsInCart.length : 0}</p>
                    <div className="App">
                        {prodList}
                    </div>
                <h1>This is a footer</h1>
            </div>
        );
    }
}

export default App;
