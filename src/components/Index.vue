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

    <!-- Display the content based on the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import "../style.css";
export default {};
</script>
