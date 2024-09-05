 import { ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, UPDATE_SELECTED } from '../types';

// Action for adding an item to the cart
export const addItem = (item: any) => ({
  type: ADD_ITEM,
  payload: item, // The item to be added to the cart
});

// Action for removing an item from the cart
export const removeItem = (id: string) => ({
  type: REMOVE_ITEM,
  payload: id,
});

// Action for updating the quantity of an item in the cart
export const updateQuantity = (id: string, quantity: number) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity }, // Object containing the item ID and the new quantity
});

// Action for updating whether an item is selected or not
export const updateSelected = (id: string, selected: boolean) => ({
  type: UPDATE_SELECTED,
  payload: { id, selected }, // Object containing the item ID and its selected status
});

export const selectAllItems = (id: string, selected: boolean) => ({
  type: UPDATE_SELECTED,
  payload: { id, selected }, // Object containing the item ID and its selected status
});

