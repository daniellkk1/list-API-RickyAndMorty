import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';

export default function Peoplecard(props) {

  
  return (
    <Card sx={{ maxWidth: 345, margin:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography fontSize="16px" fontWeight="bold" gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant="body2" color="text.secondary">
              {props.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.location}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}