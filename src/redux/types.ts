import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';

//Action Types: These are constants that represent different actions that can be performed on the cart. They help identify what kind of action is being dispatched in the Redux store.
interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: CartState;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: string; // Item ID
}

interface UpdateQuantityAction {
  type: typeof UPDATE_QUANTITY;
  payload: { id: string; quantity: number };
}

interface UpdateSelectedAction {
  type: typeof UPDATE_SELECTED;
  payload: { id: string; selected: boolean };
}


export type CartActionTypes =
  | AddItemAction
  | RemoveItemAction
  | UpdateQuantityAction
  | UpdateSelectedAction;

//CartActionTypes: This is a union type that combines all the action interfaces. It means that any action related to the cart will be one of these types.

export interface CartState {
  toFixed(arg0: number): unknown;
  price: ReactNode;
  title: ReactNode;
  id: any;
  image: ImageSourcePropType | undefined;
  items: CartState[];
  selectedItems: { [key: string]: boolean };
  quantities: { [key: string]: number };
}
