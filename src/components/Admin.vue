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

    <!-- Your website content goes here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
