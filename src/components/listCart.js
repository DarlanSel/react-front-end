import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import axios from 'axios';

const { useGlobalState } = require('../GlobalState');
const { token } = require('../config');

export default function ListCartComponent({item}) {
  const [ product, setProduct] = React.useState({});
  const [ items, setItems] = useGlobalState('cart');

  const getProduct = async (id) => {
    if (!id) return undefined;

    const response = await axios.get(`http://localhost:3000/products/${id}`)

    console.log(response);
    return response.data;
  }

  const getItems = async () => {
    const response = await axios.get("http://localhost:3000/cart", {
      headers: {
        'Authorization': token
      }
    })

    return response.data.items;
  }

  React.useEffect(() => {
    const getProductEffect = async () => setProduct(await getProduct(item.productId))
    getProductEffect()
  }, [])

  const destroyItem = async (id) => {
    await axios.delete(`http://localhost:3000/cart/items/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      data: { quantity: 1 }
    })
    setItems(await getItems())
  }


  return (
    <List sx={{ width: '100%', maxWidth: 1000, minWidth: 1000, bgcolor: 'background.paper' }}>
      <ListItem>
      <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="h5"
               color="text.primary"
               style={{color: '#751d1db7'}}
             >
             {`${product.name} x${item.quantity}`}
             </Typography>}
            secondary={`R$ ${item.quantity * parseFloat(item.price)}`} />

        <IconButton
              size="large"
              edge="end"
              color="inherit"
              sx={{ mr: 2 }}
              style={{color: '#751d1db7'}}
              onClick={() => destroyItem(item.id)}
              >
              <DeleteIcon />
            </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
