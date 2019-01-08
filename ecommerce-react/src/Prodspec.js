import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Prodspec extends Component {
    constructor() {
        super();
        this.state = {
            product: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params._id;
        const url = "http://192.168.99.100:8083/api/collections/get/Products?token=account-f71e27ff51498b0fff2224685b1969&filter[_id]="+id;

        fetch(url)
            .then((collections) => collections.json())
            .then((data) => {
                this.setState({
                    product: data.entries[0]
                })
            })
    }
    render ()
    {
        const product = this.state.product;
        if (!this.state.product) {
            return null;
        }


        return (
            <NavLink to={"/product/"+product._id}>
                <h2>{product.Name}</h2>
                <p>{product.Price}</p>
                <p>{product.Description}</p>
                <p>{product.Stock}</p>
                {/*<Review reviews={product.reviews}/>
                <UserComment id={this.props._id} updateReview={this.props.review}/>*/}
            </NavLink>
        )
    }
}

export default Prodspec;