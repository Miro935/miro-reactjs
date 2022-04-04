import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelectors = (state) => state.cart.cartItems;

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsSelectors, 
  (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Calculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelectors, 
  (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
