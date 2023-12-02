<template>
  <ul>
    <li :class="{ 'vip-ticket': isVip, 'normal-ticket': !isVip }">
      <div class="ticket-card">
        <h3>{{ ticketName }}</h3>
        <p>Description: {{ description }}</p>
        <p>Count: {{ count }}</p>
        <p>Price: ${{ price.toFixed(2) }}</p>
        <p v-if="isVip" class="vip-label">VIP Pass</p>
        <button>Add To Cart</button>
      </div>
    </li>
  </ul>
</template>

<script>
import "../style.css";
export default {
  props: {
    ticketName: String,
    description: String,
    count: Number,
    price: Number,
    isVip: Boolean,
  },
};
</script>

<style>
/* Add your styles here */
</style>
