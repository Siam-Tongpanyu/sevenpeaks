import React from 'react';
import { InputBase } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import {searchGuardianList} from '../../Redux/actions';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles(theme => ({  
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.45)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const GuardianSearch = (props)=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const searchHandler = (event)=>{    
    let eValue = event.target.value;  
    dispatch(searchGuardianList({
      searchText: eValue        
    }));
  }
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        name="searchText"
        inputProps={{ "aria-label": "search" }}        
        onChange={searchHandler}
      />
    </div>
  );
};

export default GuardianSearch;