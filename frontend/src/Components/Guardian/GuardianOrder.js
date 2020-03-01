import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import {orderGuardianList} from '../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',    
  },
  orderControl: {
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GuardianOrder = (props)=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const reduxGuardianList = useSelector(state => state.guardianListReduce);

  const handleChange = (event)=>{
    let orderValue = event.target.value;    
    dispatch(orderGuardianList({
      orderBy: orderValue        
    }));
  };

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={handleChange}
        inputProps={{
          name: "orderListBy",
          id: "order-article-list-helper"
        }}
        value={reduxGuardianList.orderBy}
      >
        <option value="newest">
          Newest
        </option>
        <option value="oldest">Oldest</option>
      </NativeSelect>
    </FormControl>
  );
};

export default GuardianOrder;

