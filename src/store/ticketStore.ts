// store.ts
import { defineStore } from "pinia";
import tempData from "../temp-data";

const useTicketStore = defineStore({
  id: "ticketStore",
  state: () => {
    return {
      tickets: tempData.tickets,
    };
  },
  actions: {
    decrement(ticketId: number) {
      const ticket = this.tickets.find((t) => t.ticketId === ticketId);
      if (ticket) {
        ticket.count--;
      }
    },
    increment(ticketId: number) {
      const ticket = this.tickets.find((t) => t.ticketId === ticketId);
      if (ticket) {
        ticket.count++;
      }
    },
  },
});

export default useTicketStore;
