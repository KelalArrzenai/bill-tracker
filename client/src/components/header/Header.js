import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

export default function Header() {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Money Header"
          height="300"
          image="./header.jpg"
          title="Bill Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bill Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pay Monthly Bill Easily 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Open Link 1
        </Button>
        <Button size="small" color="primary">
          Open Link 2
        </Button>
      </CardActions>
    </Card>
  );
}