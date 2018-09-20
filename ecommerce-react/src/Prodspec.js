import React, { Component } from 'react';
import Review from "./Review";
import UserComment from "./UserComment";

class Prodspec extends Component {
    constructor() {
        super();
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        fetch("http://localhost:1337/products/"+id)
            .then((collections) => collections.json())
            .then((data) => {
                this.setState({
                    product: data
                })
            })
    }
    render ()
    {
        console.log(this.state.product);
        const product = this.state.product;

        if (!product)
            return null;

        return (
            <div>
                <h2>{product.Name}</h2>
                <p>{product.Price}$</p>
                <p>{product.Description}</p>
                <p>In Stock: {product.Stock}</p>
                <Review reviews={product.reviews}/>
                <UserComment id={this.props.id} updateReview={this.props.review}/>
            </div>
        )
    }
}

export default Prodspec;