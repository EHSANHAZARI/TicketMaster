// tests/unit/example.spec.js
import { mount } from "@vue/test-utils";
import { createApp } from "vue";
import { pinia } from "./setupTests"; // Import the Pinia instance for mocking initialization
import Index from "../../src/components/Index.vue";
import Ticket from "../../src/components/Ticket.vue";
import Admin from "../../src/components/Admin.vue";
import CartItem from "../../src/components/CartItem.vue";
import useTicketStore from "../../src/store/ticketStore";
import tempData from "../../src/temp-data";

// Create a local Vue instance for mocking
const localVue = createApp();
localVue.use(pinia);

// Test suite for rendering components
describe("Rendering Components", () => {
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

  it("renders Admin page when passed as a prop", () => {
    const wrapper = mount(Admin, {
      global: {
        plugins: [pinia.plugin],
        components: {},
      },
    });
  });

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

describe("Admin.vue", () => {
  it("renders a new ticket in Ticket.vue when 'Add Ticket' button is clicked", async () => {
    // Mount the Admin component
    const wrapper = mount(Admin, {
      global: {
        plugins: [pinia.plugin],
        components: { Ticket },
      },
    });

    // Set values for the new ticket
    await wrapper.setData({
      ticketName: "New Concert Ticket",
      description: "Exciting new concert",
      isVip: false,
      count: 10,
      price: 29.99,
    });

    // Find the 'Add Ticket' button and trigger a click event
    await wrapper.find("button").trigger("click");

    // Use asynchronous waiting
    await wrapper.vm.$nextTick();

    // Find the Ticket component within the Admin component
    const ticketWrapper = mount(Ticket, {
      props: {
        tickets: tempData.tickets, // Pass the updated tickets array
      },
    });
    const ticketComponent = ticketWrapper.findComponent(Ticket);

    // Check if the rendered HTML contains the information of the new ticket
    expect(ticketComponent.text()).toContain("New Concert Ticket");
    expect(ticketComponent.text()).toContain(
      "Description: Exciting new concert"
    );
    expect(ticketComponent.text()).toContain("Count: 10");
    expect(ticketComponent.text()).toContain("Price: $29.99");

    // Ensure VIP label is not displayed for non-VIP tickets
    expect(ticketComponent.html()).not.toContain("VIP Pass");

    // Check if the new ticket is added to the tempData.tickets array
    expect(tempData.tickets).toHaveLength(1);
    const addedTicket = tempData.tickets[0];
    expect(addedTicket.ticketName).toBe("New Concert Ticket");
    expect(addedTicket.description).toBe("Exciting new concert");
    expect(addedTicket.isVip).toBe(false);
    expect(addedTicket.count).toBe(10);
    expect(addedTicket.price).toBe(29.99);

    // Check if the new ticket is added to the ticketStore
    const ticketStore = useTicketStore();
    const storedTickets = ticketStore.getTickets();
    expect(storedTickets).toHaveLength(1);
    const storedTicket = storedTickets[0];
    expect(storedTicket.ticketName).toBe("New Concert Ticket");
    expect(storedTicket.description).toBe("Exciting new concert");
    expect(storedTicket.isVip).toBe(false);
    expect(storedTicket.count).toBe(10);
    expect(storedTicket.price).toBe(29.99);
  });
});
