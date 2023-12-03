import { defineStore } from "pinia";
import tempData from "../temp-data";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => {
    return {
      cartItems: tempData.cartItems,
    };
  },
  actions: {
    addToCart(ticketId: number) {
      // Access the cartItems state and push the new ticketId
      this.cartItems[0].tickets.push(ticketId);

      // Alert all items in the cart
      alert(`Items in Cart: ${this.cartItems[0].tickets.join(", ")}`);
    },
  },
});
