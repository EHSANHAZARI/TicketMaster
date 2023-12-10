// Importing necessary dependencies and modules
import { defineStore } from "pinia";
import tempData from "../temp-data";
import useTicketStore from "./ticketStore";

// Defining and exporting the useCartStore Pinia store module
export const useCartStore = defineStore({
  // Unique identifier for the store
  id: "cartStore",

  // State function returning the initial state of the store
  state: () => {
    return {
      cartItems: tempData.cartItems,
      purchasedTickets: 0,
      totalPrice: 0,
    };
  },

  // Actions containing methods that modify the state
  actions: {
    // Method to add a ticket to the cart
    addToCart(ticketId: number) {
      // Find the ticket with the given ticketId in the tempData.tickets array
      const ticketIndex = tempData.tickets.findIndex(
        (ticket) => ticket.ticketId === ticketId
      );

      // Check if the ticket is found and has available stock
      if (ticketIndex !== -1 && tempData.tickets[ticketIndex].count > 0) {
        // Access the ticket store and call the decrement method
        useTicketStore().decrement(ticketId);

        // Access the cartItems state and push the new ticketId
        this.cartItems[0].tickets.push(ticketId);

        // Update the number of purchased tickets and total price
        this.purchasedTickets += 1;
        this.totalPrice += tempData.tickets[ticketIndex].price;

        // Alert the details of purchased tickets
        const ticketNames = this.populateCartItems(this.cartItems[0].tickets);
        const alertMessage = `Items in Cart: ${
          this.purchasedTickets
        } ticket(s) - ${ticketNames.join(", ")} - Total: $${this.totalPrice}`;
        alert(alertMessage);
      } else {
        // Alert when the ticket is out of stock
        alert("Ticket is out of stock!");
      }
    },

    // Method to populate cart items with detailed information
    populateCartItems(ticketIds: number[]) {
      const realTickets = useTicketStore();
      const ticketsInCart = ticketIds.map((ticketId) =>
        realTickets.tickets.find((ticket) => ticket.ticketId === ticketId)
      );

      // Filter out null values (tickets not found)
      const validTicketsInCart = ticketsInCart.filter((ticket) => ticket);

      // Extract ticket names
      const ticketNames = validTicketsInCart.map(
        (ticket) => ticket?.ticketName || ""
      );

      return ticketNames;
    },

    // Method to remove a ticket from the cart
    removeFromCart(ticketId: number) {
      const ticketIndex = this.cartItems[0].tickets.indexOf(ticketId);

      // Check if the ticket is found in the cartItems
      if (ticketIndex !== -1) {
        // Access the ticket store and call the increment method
        useTicketStore().increment(ticketId);

        // Remove the ticketId from the cartItems state
        this.cartItems[0].tickets.splice(ticketIndex, 1);

        // Update the number of purchased tickets
        this.purchasedTickets -= 1;

        // Find the removed ticket in tempData.tickets
        const removedTicket = tempData.tickets.find(
          (ticket) => ticket.ticketId === ticketId
        );

        // Check if the ticket was found before updating the total price
        if (removedTicket) {
          this.totalPrice -= removedTicket.price;
        } else {
          // Log an error if the ticket is not found in tempData.tickets
          console.error(
            `Ticket with ID ${ticketId} not found in tempData.tickets`
          );
        }
      }
    },
  },
});

// Exporting the useCartStore module as the default export
export default useCartStore;
