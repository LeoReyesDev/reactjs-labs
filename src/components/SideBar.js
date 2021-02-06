import React, { useState, useEffect } from 'react';
import './../css/App.css';
import { TweenMax } from 'gsap';
import LightBox from './LightBox';

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
});

const SideBar = (props) => {
  const classes = useStyles();
  const [idPostsUsers, SetidPostsUsers] = useState([]);
  const [openLightBox, SetopenLightBox] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState([]);
  const myDataJson = 'https://randomuser.me/api/?results=5';

  useEffect(() => {
    loadDataJson();
    closeNav();
  }, []);

  const loadDataJson = () => {
    console.log('LOAD 1 TIME JSON', myDataJson);
    fetch(myDataJson)
      .then((response) => response.json())
      .then((idPosts) => SetidPostsUsers(idPosts.results));
  };

  console.log('LOAD 1 TIME JSON', idPostsUsers);

  /* [OPEN SIDE BAR  ================================================== ♛ */

  const openNav = () => {
    document.getElementById('mySidenav').style.width = '330px';
    console.log('OpenMenu');
    let barMenu = document.getElementById('barTitle');

    barMenu.style.display = 'block';
    barMenu.style.opacity = 0;

    TweenMax.to(barMenu, 0.5, { opacity: 1, delay: 0.3 });
    TweenMax.to('#allContent', 0.3, { opacity: 1 });
  };

  const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    TweenMax.to('#barTitle', 0.1, { opacity: 0, onComplete: noneDisplay });
    TweenMax.to('#allContent', 0.3, { opacity: 0 });
    function noneDisplay() {
      document.getElementById('barTitle').style.display = 'none';
    }
  };

  const closedLightBoxed = () => {
    //setState({ openLightBox : false })
    console.log('CLICK FROM LIGHTBOX');
    SetopenLightBox(false);
    openNav();
  };

  const openModalWin = (a, b, c, d, e, f, g, h, i) => {
    SetopenLightBox(true);
    closeNav();
    setThumbnailUrl({
      first: a,
      last: b,
      title: c,
      picture: d,
      country: e,
      city: f,
      state: g,
      phone: h,
      email: i,
    });
  };

  return (
    <div id="container">
      <div id="openCont">
        <ul>
          <li>
            <span onClick={openNav}>&#9776;</span>
          </li>
          <li>
            <span
              style={{ fontSize: '10px', color: '#ffCC00', marginLeft: '5px' }}
              onClick={openNav}
            >
              Open Menu
            </span>
          </li>
        </ul>
      </div>
      <div id="mySidenav" className="sidenav">
        <div id="barTitle">
          <h2 style={{ fontSize: '16px', textAlign: 'center' }}>
            Employee Directory
          </h2>
          <a onClick={closeNav} className="closebtn">
            &times;
          </a>
        </div>
        <div id="allContent">
          {idPostsUsers.map((item, i) => (
            <Card className={classes.root} key={i}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.name.first}
                  height="350"
                  image={item.picture.large}
                  title={item.name.first}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name.title +
                      ' ' +
                      item.name.first +
                      ' ' +
                      item.name.last}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {' Country:  ' +
                      item.location.country +
                      'City: ' +
                      item.location.city +
                      ' State: ' +
                      item.location.state}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() =>
                    openModalWin(
                      item.name.first,
                      item.name.last,
                      item.name.title,
                      item.picture.large,
                      item.location.country,
                      item.location.city,
                      item.location.state,
                      item.phone,
                      item.email
                    )
                  }
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      {openLightBox ? (
        <LightBox
          closedX={closedLightBoxed}
          title={
            ' ' +
            thumbnailUrl.title +
            ' ' +
            thumbnailUrl.first +
            ' ' +
            thumbnailUrl.last
          }
          thumbnail={thumbnailUrl.picture}
          location={
            'Country: ' +
            thumbnailUrl.country +
            ' | ' +
            thumbnailUrl.city +
            ' | ' +
            thumbnailUrl.state
          }
          personalInfo={
            'Phone: ' + thumbnailUrl.phone + 'Email: ' + thumbnailUrl.email
          }
        />
      ) : null}
    </div>
  );
};

export default SideBar;
