import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActionArea from "@mui/material/CardActionArea"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProductCardComponent({ product, price }) {
  return (
    <div className="body-app">
      <Card sx={{ maxWidth: 300, minWidth: 200 }} color='red'>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div"> {product} </Typography>
            <Typography variant="h6" color="text.primary"> R&#36; {price} </Typography>
          </CardContent>
          </CardActionArea>
      </Card>
    </div>
  );
}
