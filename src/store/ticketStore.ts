// store.ts
import { defineStore } from "pinia";
import tempData from "../temp-data";

const useTicketStore = defineStore({
  id: "ticketStore",
  state: () => {
    return {
      tickets: tempData.tickets,
      cartItems: tempData.cartItems,
    };
  },
  actions: {
    decrement(ticketId: number) {
      const ticket = this.tickets.find((t) => t.ticketId === ticketId);
      if (ticket) {
        ticket.count--;
      }
    },

    // You can add more actions related to cart management here
  },
});

export default useTicketStore;
