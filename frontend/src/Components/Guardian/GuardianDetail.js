import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, CardHeader, CardActionArea, CardContent, CardMedia, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  articleBox: {        
    backgroundColor: theme.palette.background.paper,
  },
  startArticle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  articleMain: {    
    '& img': {
      "max-width": '100%',
      height: 'auto'
    }
  }  
}));

const GuardianDetail = (props) => {  
  const classes = useStyles();
  const [guardianDetailState, setGuardianDetailState] = useState({
    guardianDetailId: "",
    headline: "",
    standfirst: "",
    thumbnail: "",
    articleBody: "",  
    detailCalled: false
   });  

  const callGuardianDetail = (articleId) => {
    let urlGetData = "http://localhost:8080/api/guardian/detail/";    
    if (articleId) {
      urlGetData = urlGetData + articleId;
    }
  //  console.log(urlGetData);        
    return axios
      .get(urlGetData)
      .then(result => {        
        setGuardianDetailState({          
          guardianDetailId: articleId,
          headline: result.data.headline,
          standfirst: result.data.standfirst,
          thumbnail: result.data.thumbnail,
          body: result.data.body,
          detailCalled: true
        });        
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  useEffect(()=>{
    if(props.aDetailId && (props.aDetailId !== guardianDetailState.guardianDetailId)){
      callGuardianDetail(props.aDetailId);
     }
  }, [guardianDetailState, props]);  
  let articleDetailData;
  if(guardianDetailState.guardianDetailId){    
    articleDetailData = (
      <Card className={classes.articleDetail}>
        <CardHeader
          title={guardianDetailState.headline}
          subheader={<div dangerouslySetInnerHTML={{
              __html: guardianDetailState.standfirst.toString()
            }}></div>}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            alt={guardianDetailState.headline}
            image={guardianDetailState.thumbnail}
            title={guardianDetailState.headline}
          />
          <CardContent
            className={classes.articleMain}
            dangerouslySetInnerHTML={{
              __html: guardianDetailState.body.toString()
            }}
          ></CardContent>
        </CardActionArea>
      </Card>
    );
  }
  else{
    articleDetailData = ( 
      <CircularProgress /> 
    );
  }
  return <div className={classes.startArticle}>{articleDetailData}</div>;
};

export default GuardianDetail;