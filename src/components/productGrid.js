import React from 'react';
import axios from 'axios';

export default class ProductGridComponent extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get("http://localhost:3000/products")
      .then(res => {
        const products = res.data;
        console.log(res.data);
        console.log(products);
        this.setState({ products });
      })
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.products.map(product => <li key={product.id}>{product.name}</li>) }
        </ul>
      </div>
    )
  }
}
