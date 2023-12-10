// Importing necessary dependencies and modules
import { defineStore } from "pinia";
import tempData from "../temp-data";
import Ticket from "../types/Ticket";
// Defining and exporting the useTicketStore Pinia store module
const useTicketStore = defineStore({
  // Unique identifier for the store
  id: "ticketStore",

  // State function returning the initial state of the store
  state: () => {
    return {
      tickets: tempData.tickets,
    };
  },

  // Actions containing methods that modify the state
  actions: {
    // Method to decrement the count of a ticket by its ID
    decrement(ticketId: number) {
      // Find the ticket with the given ticketId in the tickets array
      const ticket = this.tickets.find((t) => t.ticketId === ticketId);

      // Check if the ticket is found
      if (ticket) {
        // Decrement the count of the ticket
        ticket.count--;
      }
    },

    // Method to increment the count of a ticket by its ID
    increment(ticketId: number) {
      // Find the ticket with the given ticketId in the tickets array
      const ticket = this.tickets.find((t) => t.ticketId === ticketId);

      // Check if the ticket is found
      if (ticket) {
        // Increment the count of the ticket
        ticket.count++;
      }
    },
    addToTicket(ticket: Ticket) {
      tempData.tickets.push(ticket);
    },
  },
});

// Exporting the useTicketStore module as the default export
export default useTicketStore;
