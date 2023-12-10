// Import necessary dependencies and modules for testing
import { mount } from "@vue/test-utils";
import { createApp } from "vue";
import { pinia } from "./setupTests";
import Index from "../../src/components/Index.vue";
import Ticket from "../../src/components/Ticket.vue";
import Admin from "../../src/components/Admin.vue";
import CartItem from "../../src/components/CartItem.vue";
import ShoppingCart from "../../src/components/ShoppingCart.vue";
import useTicketStore from "../../src/store/ticketStore";
import useCartStore from "../../src/store/cartItemsStore";

// Create a local Vue instance and set up Pinia for mocking
const localVue = createApp();
localVue.use(pinia);

// Test suite for rendering components
describe("Rendering Components", () => {
  // Test case: renders Admin page when passed as a prop
  it("renders Admin page when passed as a prop", () => {
    const wrapper = mount(Admin, {
      global: {
        plugins: [pinia.plugin],
        mocks: {
          $route: { path: "/admin" },
        },
        components: {},
      },
    });
  });

  // Test case: renders home page when passed as a prop
  it("renders home page when passed as a prop", () => {
    const wrapper = mount(Index, {
      global: {
        plugins: [pinia.plugin],
        mocks: {
          $route: { path: "/" },
        },
        components: { Ticket },
      },
    });
  });

  // Test case: renders Admin page when passed as a prop
  it("renders Admin page when passed as a prop", () => {
    const wrapper = mount(Admin, {
      global: {
        plugins: [pinia.plugin],
        components: {},
      },
    });
  });

  // Test case: renders cart page when passed as a prop
  it("renders cart page when passed as a prop", () => {
    const wrapper = mount(Index, {
      global: {
        plugins: [pinia.plugin],
        mocks: {
          $route: { path: "/cart" },
        },
        components: { CartItem },
      },
    });
  });
});

// Test suite for Ticket component
describe("Ticket.vue", () => {
  // Test case: renders non-VIP ticket details correctly
  it("renders non-VIP ticket details correctly", () => {
    // Sample ticket data for testing
    const mockTicket = {
      ticketId: 1,
      ticketName: "Concert Ticket",
      description: "A fantastic concert experience",
      count: 5,
      price: 25.99,
      isVip: false,
    };

    // Mount the Ticket component with the mock ticket data
    const wrapper = mount(Ticket, {
      props: {
        tickets: [mockTicket],
      },
    });

    // Check if the rendered HTML contains the ticket information
    expect(wrapper.text()).toContain(mockTicket.ticketName);
    expect(wrapper.text()).toContain(`Description: ${mockTicket.description}`);
    expect(wrapper.text()).toContain(`Count: ${mockTicket.count}`);
    expect(wrapper.text()).toContain(`Price: $${mockTicket.price.toFixed(2)}`);

    // Ensure VIP label is not displayed for non-VIP tickets
    expect(wrapper.html()).not.toContain("VIP Pass");
  });

  // Test case: renders VIP ticket details correctly
  it("renders VIP ticket details correctly", () => {
    // Sample ticket data for testing
    const mockTicket = {
      ticketId: 1,
      ticketName: "Concert VIP Ticket",
      description: "A fantastic concert experience",
      count: 5,
      price: 25.99,
      isVip: true,
    };

    // Mount the Ticket component with the mock ticket data
    const wrapper = mount(Ticket, {
      props: {
        tickets: [mockTicket],
      },
    });

    // Check if the rendered HTML contains the ticket information
    expect(wrapper.text()).toContain(mockTicket.ticketName);
    expect(wrapper.text()).toContain(`Description: ${mockTicket.description}`);
    expect(wrapper.text()).toContain(`Count: ${mockTicket.count}`);
    expect(wrapper.text()).toContain(`Price: $${mockTicket.price.toFixed(2)}`);

    // Ensure VIP label is displayed for VIP tickets
    expect(wrapper.html()).toContain("VIP Pass");
  });
});

// Test suite for useTicketStore
describe("useTicketStore", () => {
  // Test case: adds a new ticket to the store when addToTicket is called
  it("adds a new ticket to the store when addToTicket is called", () => {
    // Create a local instance of the store
    const ticketStore = useTicketStore();

    // Initial tickets count, helps us control changes made by clicking the button
    const initialTicketsCount = ticketStore.tickets.length;

    // Sample ticket data for testing
    const newTicket = {
      ticketName: "New Concert Ticket",
      description: "A new fantastic concert experience",
      isVip: false,
      count: 10,
      price: 29.99,
    };

    // Call the addToTicket method
    ticketStore.addToTicket(newTicket);

    // Assert that the ticket was added to the store
    expect(ticketStore.tickets.length).toBe(initialTicketsCount + 1);

    // Assert that the added ticket has the correct properties
    const addedTicket = ticketStore.tickets[initialTicketsCount];
    expect(addedTicket.ticketName).toBe(newTicket.ticketName);
    expect(addedTicket.description).toBe(newTicket.description);
    expect(addedTicket.isVip).toBe(newTicket.isVip);
    expect(addedTicket.count).toBe(newTicket.count);
    expect(addedTicket.price).toBe(newTicket.price);
  });
});

// Test suite for ShoppingCart.vue
describe("ShoppingCart.vue", () => {
  // Test case: calls populateCartItems when addToCart is called
  it("calls populateCartItems when addToCart is called", async () => {
    // Create a local instance of the cart store
    const cartStore = useCartStore();

    // Mock the populateCartItems method
    jest.spyOn(cartStore, "populateCartItems");

    // Sample ticket data for testing
    const mockTicket = {
      ticketId: 1,
      ticketName: "Concert Ticket",
      description: "A fantastic concert experience",
      count: 5,
      price: 25.99,
      isVip: false,
    };

    // Mount the ShoppingCart component
    const wrapper = mount(ShoppingCart, {
      global: {
        plugins: [pinia.plugin],
      },
    });

    // Add a ticket to the cart
    await cartStore.addToCart(mockTicket.ticketId);

    // Check if the populateCartItems method was called
    expect(cartStore.populateCartItems).toHaveBeenCalled();
  });
});
