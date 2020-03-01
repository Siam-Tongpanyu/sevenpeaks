module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,  
  guardian: {
    key: "0fc8e855-bf78-43f4-9c6c-9cbffa553680",
    listUrl: "https://content.guardianapis.com/search",
    detailUrl: "https://content.guardianapis.com"
  }
  
};