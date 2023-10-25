// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlices from '../Reducers/userReducer';

/* const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer); */

export const store = configureStore({
  reducer: {
    user: userSlices,
  }
});


