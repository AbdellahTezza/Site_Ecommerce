const setProducts = (state, payload) => {
    state.products = payload; 
};
  
const addToCart = (state, payload) =>  {
    if (state.cart.length != 0) {
      
      let item = state.cart.find((item) => item._id === payload._id);
      if (item) {
          if (item.size === payload.size) {
              if (item.quantity < 10) {
                  item.quantity += payload.quantity;
              } else if (item.quantity >= 10) {
                  item.quantity = 10;
              }
          } else {
              console.log("different size");
              state.cart = [...state.cart, payload];
          }
      } else {
          //if the item is not in the cart, add it
          state.cart = [...state.cart, payload];
      }
  } else {
      //if the cart is empty, add the item
      state.cart = [...state.cart, payload];
  }
}

const updateQuantity = (state, payload) => {
    // console.log(payload.size);
    // console.log();
    if (payload.quantity > 0) {
        let item = state.cart.find(
            (item) =>
                item._id === payload._id && item.size === payload.size
        );
        item.quantity = payload.quantity;
        // console.log(item.quantity);
    }
}

const deleteItem = (state, payload) => {
    state.cart.splice(payload, 1);
}

export default {
    setProducts,
    addToCart,
    updateQuantity,
    deleteItem,
};