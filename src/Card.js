import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BasicCard(props) {
  return (
    <Card sx={{ Width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {props.heading}
        </Typography>
        <Typography variant="h5" component="div">
           {props.subheading}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {props.adjective}
        </Typography>
        <Typography variant="body2">
             {props.well}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Toggle</Button>
      </CardActions>
    </Card>
  )
}
export default BasicCard;

