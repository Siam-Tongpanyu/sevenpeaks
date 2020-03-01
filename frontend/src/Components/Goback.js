import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gobackButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },  
}));

const Goback = ()=>{
  const classes = useStyles();
  let history = useHistory();
  return (
    <div className={classes.gobackButton}>
      <Button variant="contained" color="primary" onClick={() => history.goBack()}>
      Goback
      </Button>      
    </div>
  );
};

export default Goback