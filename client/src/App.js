import React,{useEffect,useState} from 'react'
import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'

import {useDispatch} from 'react-redux'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import memories from './images/memories.png'
import {getPosts} from './actions/posts'

import useStyles from './styles'

function App() {
  const [currentId,setCurrentId]=useState(null)
  const classes=useStyles();
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId,dispatch])
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img  className={classes.image} src={memories} alt="memories" height="60"/>

        </Typography>
      </AppBar>
      <Grow in >
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}> 
          <Grid item xs={12} sm={7}>
            
              <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            
          </Grid>

          </Grid>
        </Container>


      </Grow>


    </Container>
  );
}

export default App;
