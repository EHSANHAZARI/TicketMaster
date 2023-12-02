// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "./components/Index.vue";
import AdminPage from "./components/Admin.vue";
import ShoppingCartPage from "./components/ShoppingCart.vue";
import NotFoundPage from "./components/NotFoundPage.vue";
import { createPinia } from "pinia";
import { useMainStore } from "./stores/store"; // Import the Pinia store
useMainStore;
// Creating a Pinia instance
const pinia = createPinia();

// Creating a router instance with the defined routes and web history
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/cart",
    component: ShoppingCartPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Creating the main Vue application instance, attaching the router, and mounting the app to the '#app' element in the HTML
createApp(App).use(pinia).use(router).mount("#app");
