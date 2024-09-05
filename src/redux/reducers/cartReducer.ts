import {
  CartState,
  CartActionTypes,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  UPDATE_SELECTED,
} from '../types';

// Define the initial state of the cart
const initialState: CartState = {
  items: [], // List of items in the cart
  selectedItems: {}, // Object to keep track of selected items (key: item ID, value: boolean)
  quantities: {},
  price: undefined, //store metadata
  title: undefined,
  id: undefined,
  image: undefined,
};

// Define the cartReducer function
const cartReducer = (
  state = initialState,
  action: CartActionTypes,
): CartState => {
  switch (action.type) {
    // Handle the ADD_ITEM action
    case ADD_ITEM:
      return {
        ...state,
        items: action.payload, // Add the new item to the list of items
      };

    // Handle the REMOVE_ITEM action
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload), // Remove the item with the specified ID
        selectedItems: {...state.selectedItems, [action.payload]: undefined}, // Remove the item's selection status
        quantities: {...state.quantities, [action.payload]: undefined}, // Remove the item's quantity
      };

    // Handle the UPDATE_QUANTITY action
    case UPDATE_QUANTITY:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.payload.id]: action.payload.quantity,
        }, // Update the quantity of the specified item
      };

    // Handle the UPDATE_SELECTED action
    case UPDATE_SELECTED:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          [action.payload.id]: action.payload.selected,
        }, // Update the selection status of the specified item
      };

    // Return the current state if action type does not match any cases
    default:
      return state;
  }
};

// Export the reducer to be used in the Redux store
export default cartReducer;
