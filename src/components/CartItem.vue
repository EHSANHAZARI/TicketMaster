<template>
  <!-- Container for displaying individual items in the shopping cart -->
  <div class="cart-item">
    <!-- Loop through localCartItems and display detailed ticket information -->
    <div
      v-for="(ticket, index) in localCartItems"
      :key="index"
      class="ticket-card"
    >
      <p class="ticket-info">Ticket ID: {{ ticket.ticketId }}</p>
      <p class="ticket-info">Ticket Name: {{ ticket.ticketName }}</p>
      <p class="ticket-info">Description: {{ ticket.description }}</p>
      <p class="ticket-info">Price: ${{ ticket.price }}</p>
      <p v-if="ticket.isVip" class="vip-label">VIP Pass</p>
      <!-- Button to remove the item from the shopping cart -->
      <button @click.prevent="removeItem(ticket.ticketId)" class="removeBtn">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
// Importing Pinia store modules for managing cart items and tickets
import useCartStore from "../store/cartItemsStore";
import useTicketStore from "../store/ticketStore";

export default {
  data() {
    // Local data property to store cart items for rendering
    return {
      localCartItems: [],
    };
  },
  mounted() {
    // Populate localCartItems with ticket details when the component is mounted
    this.populateCartItems(useCartStore().cartItems[0].tickets);
  },
  methods: {
    // Method to populate localCartItems with detailed ticket information
    populateCartItems(cartItems) {
      const tickets = useTicketStore().tickets;

      // Filter tickets based on ticketId and populate localCartItems
      this.localCartItems = cartItems.map((cartItemId) => {
        return tickets.find((ticket) => ticket.ticketId === cartItemId);
      });
    },
    // Method to remove an item from the shopping cart
    removeItem(id) {
      const ticketStore = useTicketStore();
      const ticketIndex = this.localCartItems.findIndex(
        (ticket) => ticket.ticketId === id
      );

      // Check if the ticket is found in the localCartItems
      if (ticketIndex !== -1) {
        // Remove the ticket from localCartItems
        const removedTicket = this.localCartItems.splice(ticketIndex, 1)[0];
        // Remove the ticketId from the cart store
        useCartStore().removeFromCart(removedTicket.ticketId);
      }
    },
  },
};
</script>
