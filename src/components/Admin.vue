<template>
  <div class="wrapper">
    <header class="header-page">
      <h1>Admin Page</h1>
    </header>

    <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
    </nav>

    <form action="" class="ticket-form">
      <div>
        <label for="ticketId">Ticket ID:</label>
        <input type="text" id="ticketId" v-model="ticketId" />
      </div>

      <div>
        <label for="ticketName">Ticket Name:</label>
        <input type="text" id="ticketName" v-model="ticketName" />
      </div>

      <div>
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="description" />
      </div>

      <div>
        <label for="isVip">VIP Ticket:</label>
        <input type="checkbox" id="isVip" v-model="isVip" />
      </div>

      <div>
        <label for="count">Ticket Count:</label>
        <input type="number" id="count" v-model="count" />
      </div>

      <div>
        <label for="price">Ticket Price:</label>
        <input type="number" step="0.01" id="price" v-model="price" />
      </div>
    </form>

    <!-- Display the content based on the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import tempData from "../temp-data";
export default {
  data() {
    return {};
  },
};
</script>
