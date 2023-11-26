const set_products = (context, payload) => {
    context.commit("setProducts", payload);
};

const add_to_cart = (context, payload) => {
    context.commit("addToCart", payload);
};

const update_quantity = (context, payload) => {
    context.commit("updateQuantity", payload);
};

const delete_item = (context, payload) => {
    context.commit("deleteItem", payload);
};

const sub_total = (context, payload) => {
    context.commit("subtotal", payload);
};

export default {
    set_products,
    add_to_cart,
    update_quantity,
    delete_item,
    sub_total
}