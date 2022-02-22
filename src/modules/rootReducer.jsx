import { combineReducers } from 'redux';
import { socketReducer } from './socketReducer';

const rootReducer = combineReducers({
  websocket: socketReducer,
});

export default rootReducer;