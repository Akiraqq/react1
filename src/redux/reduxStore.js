import { combineReducers, legacy_createStore } from 'redux';
import dialoguesReducer from './DialoguesReducer';
import profileReducer from './ProfileReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
});

let store = legacy_createStore(reducers);

export default store;
