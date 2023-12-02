<template>
  <div class="wrapper">
    <header class="header-page">
      <h1>Admin Page</h1>
    </header>

    <nav>
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
    </nav>
    <!-- prevent is preventing the website from default behaviour which is to refreshing the page -->
    <form @submit.prevent="addTicket" action="" class="ticket-form">
      <div>
        <label for="ticketName">Ticket Name:</label>
        <input type="text" id="ticketName" v-model="ticketName" required />
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
        <input type="number" id="count" v-model="count" min="0" required />
      </div>

      <div>
        <label for="price">Ticket Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          v-model="price"
          min="0"
          required
        />
      </div>

      <button>Adding Ticket</button>
    </form>

    <!-- Display the content based on the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import tempData from "../temp-data";

export default {
  data() {
    return {
      ticketName: "",
      description: "",
      isVip: false,
      count: 0,
      price: 0.0,
    };
  },
  methods: {
    addTicket() {
      // Validate ticketName
      if (!this.ticketName) {
        alert("Please enter a Ticket Name.");
        return;
      }

      // Validate count and price
      if (this.count < 0 || this.price < 0) {
        alert("Count and Price must not be negative.");
        return;
      }

      // Create a new ticket object using the form data
      const newTicket = {
        ticketId: tempData.tickets.length + 1, // Generate ID based on the array length
        ticketName: this.ticketName,
        description: this.description,
        isVip: this.isVip,
        count: parseInt(this.count),
        price: parseFloat(this.price),
      };

      // Add the new ticket to the tickets array in tempData
      tempData.tickets.push(newTicket);
      alert(this.ticketName + " is added");

      // Reset the form fields
      this.ticketName = "";
      this.description = "";
      this.isVip = false;
      this.count = 0;
      this.price = 0.0;
    },
  },
};
</script>
