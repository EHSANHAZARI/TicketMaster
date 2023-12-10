<template>
  <!-- Main wrapper for the Cart Page -->
  <div class="wrapper">
    <!-- Header section with the page title -->
    <header class="header-page">
      <h1>Cart Page</h1>
    </header>

    <!-- Navigation bar with links to different routes -->
    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
    </nav>

    <!-- Container for displaying cart items, total purchased tickets, total price, and checkout button -->
    <div id="cartItems">
      <!-- Use CartItem component to display each item in the cart -->
      <CartItem />
      <h3>Number of Purchased Tickets are: {{ purchasedTickets }}</h3>
      <h3>Total Price is: {{ totalPrice }}</h3>
      <button @click.prevent="checkOut">Check Out</button>
    </div>

    <!-- Router view for rendering the current route's component -->
    <router-view></router-view>
  </div>
</template>

<script>
// Importing the cartItems store module and the CartItem component
import useCartStore from "../store/cartItemsStore.ts";
import CartItem from "./CartItem.vue";

export default {
  data() {
    // Local data properties to store cart information
    return {
      localCartItems: [],
      purchasedTickets: 0,
      totalPrice: 0,
    };
  },
  components: {
    CartItem, // Registering the CartItem component for use in the template
  },
  mounted() {
    // Access the cartItems state from the store and set initial local data
    this.localCartItems = useCartStore().cartItems;
    this.purchasedTickets = useCartStore().purchasedTickets;
    this.totalPrice = useCartStore().totalPrice;

    // Watch for changes in the store state and update local data accordingly
    this.$watch(
      () => useCartStore().cartItems,
      (newCartItems) => {
        this.localCartItems = newCartItems;
      }
    );

    this.$watch(
      () => useCartStore().purchasedTickets,
      (newPurchasedTickets) => {
        this.purchasedTickets = newPurchasedTickets;
      }
    );

    this.$watch(
      () => useCartStore().totalPrice,
      (newTotalPrice) => {
        this.totalPrice = newTotalPrice;
      }
    );
  },
  methods: {
    // Method triggered when the user clicks the checkout button
    checkOut: () => {
      alert(
        "Appreciate your attention, Ms. Reihani. Looking forward to connecting with you again soon!"
      );
    },
  },
};
</script>
