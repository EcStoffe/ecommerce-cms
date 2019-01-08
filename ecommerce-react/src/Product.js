import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

class Product extends Component {
    constructor(props) {
        super(props);

    }

    addToCart() {
        let itemsInCart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
        itemsInCart.push(this.props.product);
        localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
        console.log("your item: ", itemsInCart);
        this.props.addToCart(itemsInCart)
    }

    render() {
        const product = this.props.product;
        let imageURL = `http://192.168.99.100:8083/api/collections/get/Products?${product.Image}`;


        return (

            <div id="container" className="flex-container">
            <NavLink to={"/product/"+product._id}>
                <h2>Name: {product.Name} </h2>
                <p>Description: {product.Description} </p>
                <p>Stock: {product.Stock} </p>
                <p>Category: {product.Category} </p>
                <h3>Price: {product.Price} </h3>
                <img src={imageURL} />
                <p>Rating: {product.Rating} </p>
            </NavLink>
                <AddToCartButton addToCart={this.addToCart.bind(this, product)}/>
            </div>
        )
    }
}

export default Product;