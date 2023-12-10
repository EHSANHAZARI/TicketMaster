<template>
  <!-- List of tickets displayed in an unordered list -->
  <ul>
    <!-- Iterate over each ticket and apply dynamic classes based on VIP status -->
    <li
      v-for="ticket in tickets"
      :key="ticket.ticketId"
      :class="{ 'vip-ticket': ticket.isVip, 'normal-ticket': !ticket.isVip }"
    >
      <!-- Individual ticket card with details and Add to Cart button -->
      <div class="ticket-card">
        <h3>{{ ticket.ticketName }}</h3>
        <p>Description: {{ ticket.description }}</p>
        <p>Count: {{ ticket.count }}</p>
        <p>Price: ${{ ticket.price.toFixed(2) }}</p>
        <!-- Display VIP label if the ticket is a VIP pass -->
        <p v-if="ticket.isVip" class="vip-label">VIP Pass</p>
        <!-- Button to add the ticket to the cart -->
        <button @click.prevent="addToCart(ticket.ticketId)">Add To Cart</button>
      </div>
    </li>
  </ul>
</template>

<script>
// Importing the useCartStore function from the cartItemsStore module
import { useCartStore } from "../store/cartItemsStore.ts";

export default {
  // Prop to receive an array of tickets from the parent component
  props: {
    tickets: {
      type: Array,
      required: true,
    },
  },
  watch: {
    // Watch for changes in the 'tickets' prop
    tickets: {
      handler(newTickets) {
        // Do something when 'tickets' prop changes
        // For example, you can log the newTickets
        console.log("Tickets updated:", newTickets);
      },
      immediate: true, // Trigger the handler immediately on component mount
    },
  },
  methods: {
    // Method triggered when the Add to Cart button is clicked
    addToCart(ticketId) {
      // Access the cart store and call the addToCart action
      useCartStore().addToCart(ticketId);
    },
  },
};
</script>
