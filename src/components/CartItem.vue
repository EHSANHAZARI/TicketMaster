<template>
  <div class="cart-item">
    <!-- Display the detailed ticket information -->
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
      <button @click.prevent="removeItem(ticket.ticketId)" class="removeBtn">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import useCartStore from "../store/cartItemsStore";
import useTicketStore from "../store/ticketStore";

export default {
  data() {
    return {
      localCartItems: [],
    };
  },
  mounted() {
    this.populateCartItems(useCartStore().cartItems[0].tickets);
  },
  methods: {
    populateCartItems(cartItems) {
      const tickets = useTicketStore().tickets;

      // Filter tickets based on ticketId
      this.localCartItems = cartItems.map((cartItemId) => {
        return tickets.find((ticket) => ticket.ticketId === cartItemId);
      });
    },
    removeItem(id) {
      const ticketStore = useTicketStore();
      const ticketIndex = this.localCartItems.findIndex(
        (ticket) => ticket.ticketId === id
      );

      if (ticketIndex !== -1) {
        const removedTicket = this.localCartItems.splice(ticketIndex, 1)[0];
        // Remove the ticketId from the cart store
        useCartStore().removeFromCart(removedTicket.ticketId);
      }
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.ticket-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
}

.ticket-info {
  margin: 5px 0;
}

.removeBtn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .cart-item {
    grid-template-columns: 1fr;
  }
}
</style>
