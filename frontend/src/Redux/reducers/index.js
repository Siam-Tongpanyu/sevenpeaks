import {combineReducers} from 'redux';
import guardianListReducer from './guardianList';
import guardianDetailReducer from './guardianDetail';

const allReducer = combineReducers({
  guardianListReduce: guardianListReducer,
  guardianDetailReduce: guardianDetailReducer
});

export default allReducer;