import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import counterReducer from '../features/Counter/counterSlice';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
