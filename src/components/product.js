import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons'
 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
          className={classes.action}
          variant='h5'
          color='textSecondary'
          >
            {60}
          </Typography>
        }
        title="Zapatillas Nike Air"
        subheader="En stock"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgD7lgCNICNhb2LHmwNdfdPSu316SIWNWNjdt2FSTUBnwqLhB-q-xdZKdCt4wtE_SqAU&usqp=CAU/a/images/c_limit,w_592,f_auto/t_product_v1/d9f1d9ee-a848-4a36-aab9-48b241078ebb/air-force-1-le-zapatillas-nino-a-7XSl5m.pngs/cards/paella.jpg"
        title="Nike Air"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Zapatillas Sports
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to Cart'>
            <AddShoppingCart fontSize='large'/>
        </IconButton>
        {Array(4)
        .fill()
        .map((_, i) =>(
            <p>&#11088;</p>
        ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>"Zapatilas para salir":</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
