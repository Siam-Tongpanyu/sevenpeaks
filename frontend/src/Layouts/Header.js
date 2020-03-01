import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GuardianSearch from '../Components/Guardian/GuardianSearch';
import './header.css';

const useStyles = makeStyles(() => ({
  customnavbar: {
    "border-color": "rgb(255,255,255)"
  },  
  homelink: {
    "flex-grow": 1,
    display: "block"
  }
}));

const Header = (props)=>{
  const classes = useStyles();
  return (    
      <Navbar bg="primary" expand="lg" >        
          <Navbar.Brand className={classes.homelink}>
            <Link to="/">Guardian Articles</Link>
          </Navbar.Brand>
          <GuardianSearch />       
      </Navbar>    
  );
};

export default Header;