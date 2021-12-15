import React from 'react';
import axios from 'axios';

// Components
import ProductCardComponent from '../components/productCard'
import Grid from '@mui/material/Grid'

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
        <br />
        <Grid container spacing={12} justifyContent="center">
          { this.state.products.map(product => (
            <Grid item>
              <ProductCardComponent product={product}/>
            </Grid>
          )) }
        </Grid>
      </div>
    )
  }
}
