import {combineReducers, configureStore} from '@reduxjs/toolkit';
import tripsReducers from './reducers/tripsReducers';
import promotionsReducer from './reducers/promotionsReducer';
import userReducer from './reducers/userReducer';
import chatReducer from './reducers/chatReducer';

const rootReducer = combineReducers({
  trips: tripsReducers,
  promotions: promotionsReducer,
  user: userReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
