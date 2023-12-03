<template>
  <div class="wrapper">
    <header class="header-page">
      <h1>Ticket Master</h1>
    </header>

    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
    </nav>

    <div class="ticket">
      <h2 class="ticketDesc">All Tickets :</h2>
      <Ticket :tickets="localTickets" />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import "../style.css";
import useTicketStore from "../store/ticketStore.ts";
import Ticket from "./Ticket.vue";

export default {
  data() {
    return {
      localTickets: [], // Initialize localTickets as an empty array
    };
  },
  mounted() {
    const ticketStore = useTicketStore();
    // Assign the value of ticketStore.tickets to localTickets
    this.localTickets = ticketStore.tickets;
  },
  components: {
    Ticket,
  },
};
</script>
