<template>
  <div class="wrapper">
    <header class="header-page">
      <h1>Cart Page</h1>
    </header>

    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
    </nav>

    <div id="cartItems">
      <!-- Use CartItem component to display each item in the cart -->
      <CartItem />
      <h3>Number of Purchased Tickets are : {{ purchasedTickets }}</h3>
      <h3>Total Price is : {{ totalPrice }}</h3>
      <button @click.prevent="checkOut">Check Out</button>
    </div>

    <!-- Display the content based on the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import useCartStore from "../store/cartItemsStore.ts";
import CartItem from "./CartItem.vue";

export default {
  data() {
    return {
      localCartItems: [],
      purchasedTickets: 0,
      totalPrice: 0,
    };
  },
  components: {
    CartItem,
  },
  mounted() {
    // Access the cartItems state from the store
    this.localCartItems = useCartStore().cartItems;
    this.purchasedTickets = useCartStore().purchasedTickets;
    this.totalPrice = useCartStore().totalPrice;

    // Watch for changes in the store state and update local data accordingly otherwise it changes only when the page is mounting
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
    checkOut: () => {
      alert(
        "Appreciate your attention, Ms. Reihani. Looking forward to connecting with you again soon!"
      );
    },
  },
};
</script>
