import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) =>{
  if(action.type === 'ADD'){
    const updatedtems = state.items.concat(action.item);{/*returns a new array*/}
    const updatedTotalAmount = state.totalAmonut + action.item.price * action.item.amount;
    return {
      items: updatedtems,
      totalAmonut: updatedTotalAmount
    }
  }
  return defaultCartState;
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer , defaultCartState);

   const addItemCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
   };

   const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id});
   };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler
  }
//  addItem and removeItem are just pointer pointing to the handlers

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;