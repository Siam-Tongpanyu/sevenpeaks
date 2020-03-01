const init_guardianDetail = {
  guardianDetailId: "",
  headline: "",
  standfirst: "",
  thumbnail: "",
  articleBody: "",
  detailCalled: false
};

const guardianDetailReducer = (state = init_guardianDetail, action)=>{
  switch (action.type) {
    case "CURRENTGUARDIANDETAIL":
      state = action.payload;
      return state;    
    default:
      return state;
  }
};

export default guardianDetailReducer;