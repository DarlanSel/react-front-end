// Components
import ProductCardComponent from '../components/productCard'
import Grid from '@mui/material/Grid'

export default function ProductsView(){
  return(
    <div>
      <br />
      <div>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item>
            <ProductCardComponent product='Cenoura' price='15'/>
          </Grid>
          <Grid item>
            <ProductCardComponent product='Abacaxi' price='15'/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
