import React, { Component } from 'react';
import './App.css';
import Product from  './Product.js';
import Filtering from './Filtering'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        this.getProducts();
    }

    getProducts(sortOnPrice=false) {
        let append = "";

        if (sortOnPrice === 0) {
            append = "?_sort=Price:asc";
        }
        if (sortOnPrice === 1) {
            append = "?_sort=Stock:asc";
        }
        if (sortOnPrice === 2) {
            append = "?_sort=Category:asc";
        }

        fetch("http://localhost:1337/products"+append)
            .then((collections) => collections.json())
            .then((data) => {
                this.setState({
                    products: data
                });
            })
    }
    sortProducts(index) {
        this.getProducts(index)
    }


    render() {
        const prodList = this.state.products.map((product) => {
            return <Product product={product} />;
        });


        return (
            <div>
                <h1>Welcome</h1>
                <Filtering onToggleSort={this.sortProducts.bind(this)}/>
                    <div className="App">
                        {prodList}
                    </div>
                <h1>This is a footer</h1>
            </div>
        );
    }
}

export default App;
