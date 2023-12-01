// Importing necessary functions and components from Vue and Vue Router
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "./components/Index.vue";
import AdminPage from "./components/Admin.vue";
import ShoppingCartPage from "./components/ShoppingCart.vue";
import NotFoundPage from "./components/NotFoundPage.vue";
import { key, store } from "./stores/store";

// Defining the routes for the application using Vue Router's RouteRecordRaw type
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: IndexPage, // Route for the Index page
  },
  {
    path: "/admin",
    component: AdminPage, // Route for the Admin page
  },
  {
    path: "/cart",
    component: ShoppingCartPage, // Route for the Shopping Cart page
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage, // Route for handling 404 Not Found errors
  },
];

// Creating a router instance with the defined routes and web history
const router = createRouter({
  history: createWebHistory(), // In Vite, the base URL is inferred automatically, and you don't need to use process.env.BASE_URL
  routes,
});

// Creating the main Vue application instance, attaching the router, and mounting the app to the '#app' element in the HTML
createApp(App).use(router).mount("#app");
