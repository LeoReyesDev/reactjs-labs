import React from 'react';
import './../css/App.css';
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
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

const LightBox = (props) => {
  const classes = useStyles();

  const styles = {
    closeBtn: {
      width: '100%',
      textAlign: 'right',
      fontSize: '20px',
      color: 'orange',
    },
    thumb: {
      maxWidth: 80,
      maxHeight: 80,
      float: 'left',
      padding: 5,
    },
    title: {
      padding: 5,
      color: 'gray',
    },
    comments: {
      padding: 5,
      textAlign: 'right',
      fontSize: '10px',
    },
  };

  return (
    <div
      style={{
        left: 0,
        top: 0,
        backgroundColor: '#000000b0',
        height: '100%',
        width: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <Card
          className={classes.root}
          onClick={() => {
            console.log('CLICK');
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.title}
              className={classes.media}
              image={props.thumbnail}
              title={props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.location}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.personalInfo}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={props.closedX}>
              Close [x]
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default LightBox;
