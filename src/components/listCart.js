import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function ListCartComponent() {
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
               Abacaxi
             </Typography>} 
            secondary="R$ 15" />
             
        <IconButton
              size="large"
              edge="end"
              color="inherit"
              sx={{ mr: 2 }}
              style={{color: '#751d1db7'}}
              >
              <DeleteIcon />
            </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
