import CartContext from "./cart-context";

const CartProvider = props => {
   const addItemCartHandler = item => {};

   const removeItemFromCartHandler = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler
  }
//  addItem and removeItem are just pointer pointing to the handlers

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;