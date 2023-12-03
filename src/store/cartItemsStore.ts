import { defineStore } from "pinia";
import tempData from "../temp-data";
import useTicketStore from "./ticketStore";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => {
    return {
      cartItems: tempData.cartItems,
    };
  },
  actions: {
    addToCart(ticketId: number) {
      // Find the ticket with the given ticketId in the tempData.tickets array
      const ticketIndex = tempData.tickets.findIndex(
        (ticket) => ticket.ticketId === ticketId
      );

      if (ticketIndex !== -1 && tempData.tickets[ticketIndex].count > 0) {
        // Access the ticket store and call the decrement method
        useTicketStore().decrement(ticketId);

        // Access the cartItems state and push the new ticketId
        this.cartItems[0].tickets.push(ticketId);

        // Alert all items in the cart
        const populatedCartItems = this.populateCartItems(
          this.cartItems[0].tickets
        );
        alert(`Items in Cart: ${populatedCartItems.join(", ")}`);
      } else {
        alert("Ticket is out of stock!");
      }
    },
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
  },
});
