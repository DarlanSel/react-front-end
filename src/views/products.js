import React, {useState, useEffect}  from 'react'

// Components
import ProductCardComponent from '../components/productCard'
import ProductGridComponent from '../components/productGrid'
import Grid from '@mui/material/Grid'

export default function ProductsView(){
  return(
    <div>
      <div>
        <Grid container spacing={12} justifyContent="center">
          <Grid item>
            <ProductCardComponent product='Cenoura' price='15'/>
          </Grid>
          <Grid item>
            <ProductCardComponent product='Abacaxi' price='15'/>
          </Grid>
          <Grid item>
            <ProductCardComponent product='Abacaxi' price='15'/>
          </Grid>
          <Grid item>
            <ProductCardComponent product='Abacaxi' price='15'/>
          </Grid>
          <Grid item>
            <ProductCardComponent product='Abacaxi' price='15'/>
          </Grid>
          <Grid item>
            <ProductCardComponent product='Abacaxi' price='15'/>
          </Grid>
        </Grid>
      </div>

      <ProductGridComponent/>
    </div>
  );
}
