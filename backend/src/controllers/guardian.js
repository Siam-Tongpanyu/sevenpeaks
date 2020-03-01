const { validationResult } = require("express-validator");
const validator = require("../utils/validator");
const { guardian } = require("../config/vars.js");
const axios = require('axios');


exports.getList = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   // console.log(errors);
    validator.errorHandle(
      "Validation error!! Please check list parameters again.",
      422
    );
  }
  const articleSearch = req.query.search;
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 20;
  const orderBy = req.query.orderBy || "newest";
  let search;
  if (!articleSearch) {
    search = "";
  }
  else{
    search = "&q=" + articleSearch;
  }
  axios.get(`${guardian.listUrl}?api-key=${guardian.key}${search}&page-size=${perPage}&page=${currentPage}&order-by=${orderBy}`)
  .then(result=>{
    if(result.data.response.status && result.data.response.status === "ok"){
      const guardianList = result.data.response;
      res.status(200).json({
        message: "find list articles successfully.",
        guardianList: guardianList    
      });
    }
    else{
      validator.errorHandle("The requested resource could not be found.", 404); 
    }
  })
  .catch(err=>{
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};

exports.getDetail = (req, res, next)=>{  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  //  console.log(errors);
    validator.errorHandle(
      "Validation error!! Please check detail ID again.",
      422
    );
  }  
  axios.get(`${guardian.detailUrl}/${req.params.articleId}?api-key=${guardian.key}&show-fields=body,headline,standfirst,thumbnail`)
  .then(result=>{    
    if(result.data.response.status && result.data.response.status === "ok"){
      const guardianDetail = result.data.response;
      res.status(200).json({
        message: "find article successfully.",
        headline: guardianDetail.content.fields.headline,
        standfirst: guardianDetail.content.fields.standfirst,
        body: guardianDetail.content.fields.body,
        thumbnail: guardianDetail.content.fields.thumbnail    
      });
    }
    else{
      validator.errorHandle("The requested resource could not be found.", 404);
    }
  })
  .catch(err=>{
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};