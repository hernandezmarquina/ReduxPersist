import {combineReducers, configureStore} from '@reduxjs/toolkit';
import employeesReducer from './reducers/employeesReducer';
import userReducer from './reducers/userReducer';
import evaluationReducer from './reducers/evaluationReducers';

const rootReducer = combineReducers({
  user: userReducer,
  employees: employeesReducer,
  evaluation: evaluationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
