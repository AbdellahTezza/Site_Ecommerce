const affichermot =(state) => {
      return state.code_promo + " Abdellah est valied ";
};

const subtotal = (state) => {
      let subtotal = 0;
      state.cart.forEach((item) => {
          subtotal += item.price * item.quantity;
      });
      return subtotal;
};

export default {
    affichermot,
    subtotal
}