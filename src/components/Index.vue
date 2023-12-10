<template>
  <!-- Main wrapper for the Ticket Master application -->
  <div class="wrapper">
    <!-- Header section with the application title -->
    <header class="header-page">
      <h1>Ticket Master</h1>
    </header>

    <!-- Navigation bar with links to different routes -->
    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
    </nav>

    <!-- Display section for all available tickets -->
    <div class="ticket">
      <h2 class="ticketDesc">All Tickets :</h2>
      <!-- Include the Ticket component and pass localTickets as a prop -->
      <Ticket :tickets="localTickets" />
    </div>

    <!-- Router view for rendering the current route's component -->
    <router-view></router-view>
  </div>
</template>

<script>
// Importing global styles and the ticket store module
import "../style.css";
import useTicketStore from "../store/ticketStore.ts";
import Ticket from "./Ticket.vue";

export default {
  data() {
    // Data property to store local tickets for rendering
    return {
      localTickets: [], // Initialize localTickets as an empty array
    };
  },
  mounted() {
    // Access the ticket store module
    const ticketStore = useTicketStore();
    // Assign the value of ticketStore.tickets to localTickets
    this.localTickets = ticketStore.tickets;
  },
  components: {
    Ticket, // Registering the Ticket component for use in the template
  },
};
</script>
