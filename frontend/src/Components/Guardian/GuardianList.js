import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { List, ListItem, ListItemText, Divider, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {loadGuardianList} from '../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
  articles: {        
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  startArticles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  placeholder: {
    height: 40,
  }
}));

const GuardianList = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const reduxGuardianList = useSelector(state => state.guardianListReduce);

  let prevGuardianListState = useRef();  
  
  const callGuardianList = () => {
    let urlGetData = "http://localhost:8080/api/guardian/list";
    let queryData = {
      page: reduxGuardianList.currentPage,
      perPage: reduxGuardianList.pageSize,
      orderBy: reduxGuardianList.orderBy
    };
    let queryText = [];
    for (let qkey in queryData) {
      queryText.push(qkey + "=" + queryData[qkey]);
    }
    let queryUrl = "/?" + queryText.join("&");
    urlGetData = urlGetData + queryUrl;
    let search = "";
    if (reduxGuardianList.searchText) {
      search = reduxGuardianList.searchText;
      urlGetData = urlGetData + "&search=" + search;
    }
  //  console.log(urlGetData);
    return axios
      .get(urlGetData)
      .then(result => {        
        prevGuardianListState.current = {
          searchText: search,
          amountPage: result.data.guardianList.pages,
          currentPage: result.data.guardianList.currentPage,
          pageSize: result.data.guardianList.pageSize,
          orderBy: result.data.guardianList.orderBy,
          listCalled: true,
          lists: result.data.guardianList.results
        };
        dispatch(loadGuardianList({
          searchText: search,
          amountPage: result.data.guardianList.pages,
          currentPage: result.data.guardianList.currentPage,
          pageSize: result.data.guardianList.pageSize,
          orderBy: result.data.guardianList.orderBy,
          listCalled: true,
          lists: result.data.guardianList.results
        }));                
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!reduxGuardianList.listCalled && reduxGuardianList.lists.length === 0) {
      prevGuardianListState.current = reduxGuardianList;
      callGuardianList();     
    }
    let prevGListStateref = prevGuardianListState.current;    
  //  console.log('check change1', prevGListStateref);
  //  console.log('check change2', reduxGuardianList);
    if ( !prevGListStateref ||
      (prevGListStateref.searchText !== reduxGuardianList.searchText ||
      prevGListStateref.currentPage !== reduxGuardianList.currentPage ||
      prevGListStateref.pageSize !== reduxGuardianList.pageSize ||
      prevGListStateref.orderBy !== reduxGuardianList.orderBy)
    ) {
      callGuardianList();      
    }    
    // eslint-disable-next-line
  }, [reduxGuardianList]);
  let listsData;
//  console.log('redux', reduxGuardianList);
  if (reduxGuardianList.lists && reduxGuardianList.lists.length > 0) {
    listsData = (
      <List className={classes.articles}>
        {reduxGuardianList.lists.map(article => (
          <React.Fragment key={article.id}>            
          <ListItem button>
            <Link to={"/article/" + article.id}>
              <ListItemText
                primary={article.webTitle}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {`${article.sectionName} , ${article.pillarName}`}
                    </Typography>
                    {` — ${article.webPublicationDate
                      .replace(/T/, " ")
                      .substr(0, 19)}`}
                  </React.Fragment>
                }
              />
             </Link>
             </ListItem>            
            <Divider />
          </React.Fragment>
        ))}
      </List>
    );
  } else {
    listsData = (
      <div className={classes.placeholder}>
        <CircularProgress />
      </div>
    );
  }

  return <div className={classes.startArticles}>{listsData}</div>;
};

export default GuardianList;
                            