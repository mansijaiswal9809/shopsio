const cartReducer = (state, action) => {
  if (action.type === "addToCart") {
    const { id, color, count, size, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color + size);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color + size) {
          let newCount = cartItem.count + count;
          if (newCount > cartItem.max) {
            newCount = cartItem.max;
          }
          return { ...cartItem, count: newCount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color + size,
        name: product.name,
        color,
        size,
        count,
        image: product.images[0],
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "removeItem") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === "clearCart") {
    return { ...state, cart: [] };
  }
  if (action.type === "togglelAmount") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newCount = item.count + 1;
          if (newCount > item.max) {
            newCount = item.max;
          }
          return { ...item, count: newCount };
        }
        if (value === "dec") {
          let newCount = item.count - 1;
          if (newCount < 1) {
            newCount = 1;
          }
          return { ...item, count: newCount };
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === "CountCartItems") {
    const { totalItems, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { count, price } = cartItem;

        total.totalIems += count;
        total.totalAmount += price * count;
        return total;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItems, totalAmount };
  }
  return state;
  // throw new Error(`No Matching "${action.type}" - action type`)
};
export default cartReducer;
