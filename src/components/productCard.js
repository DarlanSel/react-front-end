import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardActionArea from "@mui/material/CardActionArea"
import axios from 'axios';

const { token } = require('../config');


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCardComponent({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBuyClick = (productId) => {
    axios.post("http://localhost:3000/cart/items", { productId, quantity: 1 }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 300, minWidth: 300 }} >
      <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div"> {product.name} </Typography>
            <Typography variant="h6" color="text.primary"> R&#36; {product.price} </Typography>
          </CardContent>
          </CardActionArea>
      <CardActions disableSpacing>
      <IconButton
              size="large"
              edge="end"
              color="inherit"
              sx={{ mr: 2 }}
              style={{color: '#751d1db7'}}
              onClick={() => handleBuyClick(product.id)}
              >
              <AddShoppingCartIcon />
            </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{color: '#751d1db7'}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h6">Descri????o:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
