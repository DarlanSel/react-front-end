// Components
import ListCardComponent from '../components/listCart'
import Grid from '@mui/material/Grid'

export default function CartView(){
  return(
    <div>
      <br />
      <div>
        <Grid container spacing={12} justifyContent="center">
          <Grid item>
            <ListCardComponent/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
