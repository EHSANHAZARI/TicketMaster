<template>
  <ul>
    <li
      v-for="ticket in tickets"
      :key="ticket.ticketId"
      :class="{ 'vip-ticket': ticket.isVip, 'normal-ticket': !ticket.isVip }"
    >
      <div class="ticket-card">
        <h3>{{ ticket.ticketName }}</h3>
        <p>Description: {{ ticket.description }}</p>
        <p>Count: {{ ticket.count }}</p>
        <p>Price: ${{ ticket.price.toFixed(2) }}</p>
        <p v-if="ticket.isVip" class="vip-label">VIP Pass</p>
        <button @click.prevent="addToCart(ticket.ticketId)">Add To Cart</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { useCartStore } from "../store/cartItemsStore.ts";

export default {
  props: {
    tickets: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(ticketId) {
      // Access the cart store and call the addToCart action
      useCartStore().addToCart(ticketId);
    },
  },
};
</script>
