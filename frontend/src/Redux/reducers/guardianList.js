const init_guardianList = {
  searchText: "",
  amountPage: 1,
  currentPage: 1,
  pageSize: 20,
  orderBy: "newest",
  listCalled: false,
  lists: []
};

const guardianListReducer = (state = init_guardianList, action)=>{
  switch (action.type) {
    case "LOADGUARDIANLIST":
      state = action.payload;
      return state;
    case "SEARCHGUARDIANLIST":
      return {
        ...state,
        searchText: action.payload.searchText
      };
    case "CURRENTPAGEGUARDIANLIST":
      return {
        ...state,
        currentPage: action.payload.currentPage
      };
      case "ORDERGUARDIANLIST":
      return {
        ...state,
        orderBy: action.payload.orderBy
      };
    default:
      return state;
  }
};

export default guardianListReducer;