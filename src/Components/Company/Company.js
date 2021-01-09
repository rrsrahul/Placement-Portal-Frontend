import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bmsLogo from '../../assets/images/bmsLogo.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


  

export default function ImgMediaCard(props) {
  const classes = useStyles();

  let applied = null;
  if(props.isApplied)
  {
    applied = (<Button size="small" color="primary" onClick={props.isWithdraw} >
    Withdraw
   </Button>)
  }
  else
  {
    applied = (<Button size="small" color="primary" onClick={props.clicked} disabled={props.isApplied?true:false}>
    Apply
   </Button>)
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt={props.Name}
          max-width='100%'
          max-height='100%'
          image={bmsLogo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             CTC: {props.ctc} {'\u00A0'} Role: {props.role}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Date:{props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {applied}
        <Button size="small" color="primary" onClick={props.learnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}