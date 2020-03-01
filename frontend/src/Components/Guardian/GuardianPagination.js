import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {currentGuardianList} from '../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageIndex: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const GuardianPagination = ()=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const reduxGuardianList = useSelector(state => state.guardianListReduce);

  const changePageHandler = (event, value)=>{
    dispatch(currentGuardianList({
      currentPage: value        
    }));
  };

  return (
    <div className={classes.pageIndex}>
      <Pagination
        count={reduxGuardianList.amountPage < 999 ? reduxGuardianList.amountPage : 999}
        variant="outlined"
        color="primary"
        page={reduxGuardianList.currentPage}
        onChange={changePageHandler}
      />
    </div>
  );
};

export default GuardianPagination;