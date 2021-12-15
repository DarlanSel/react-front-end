import React, {useState, useEffect} from 'react'
import axios from 'axios'

// Components
import ListCardComponent from '../components/listCart'
import Grid from '@mui/material/Grid'

const { token } = require('../config');
const { useGlobalState } = require('../GlobalState');

export default function CartView(){
  const [ items, setItems] = useGlobalState('cart');

  const getItems = async () => {
    const response = await axios.get("http://localhost:3000/cart", {
      headers: {
        'Authorization': token
      }
    })

    return response.data.items;
  }

  useEffect(() => {
    const getItemsEffect = async () => setItems(await getItems())
    getItemsEffect()
  }, [])

  return(
    <div>
      <br />
      <div>
        <Grid container spacing={2} justifyContent="center">
          { items.map(item => (
            <Grid item>
              <ListCardComponent item={item}/>
            </Grid>
          )) }
        </Grid>
      </div>
    </div>
  );
}
