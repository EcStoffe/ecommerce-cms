import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props.product;
        let imageURL = `http://localhost:1337${product.Image.url}`;

        return (
            <NavLink to={"/product/"+product.id} id="container" className="flex-container">
                <h2>Name: {product.Name} </h2>
                <p>Description: {product.Description} </p>
                <p>Stock: {product.Stock} </p>
                <p>Category: {product.Category} </p>
                <h3>Price: {product.Price} </h3>
                <img src={imageURL} />
                {/*<button onClick="goToItem">More info</button>
                <button onClick="orderItem">Order</button>*/}
            </NavLink>
        )
    }
}

export default Product;