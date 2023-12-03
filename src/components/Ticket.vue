<template>
  <ul>
    <li :class="{ 'vip-ticket': isVip, 'normal-ticket': !isVip }">
      <div class="ticket-card">
        <h3>{{ ticketName }}</h3>
        <p>Description: {{ description }}</p>
        <p>Count: {{ count }}</p>
        <p>Price: ${{ price.toFixed(2) }}</p>
        <p v-if="isVip" class="vip-label">VIP Pass</p>
        <button @click.prevent="addToCart">Add To Cart</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { useCartStore } from "../store/cartItemsStore.ts";

export default {
  props: {
    ticketId: Number,
    ticketName: String,
    description: String,
    count: Number,
    price: Number,
    isVip: Boolean,
  },
  methods: {
    addToCart() {
      // Access the cart store and call the addToCart action
      useCartStore().addToCart(this.ticketId);
    },
  },
};
</script>
