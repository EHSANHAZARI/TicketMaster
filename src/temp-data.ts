// Import the Ticket interface to define the structure of ticket objects
import { Ticket } from "../src/types/Ticket";

// Define an array of tickets with detailed information and utilize a types file to provide TypeScript type safety.
const tickets: Ticket[] = [
  {
    ticketId: 1,
    ticketName: "General Admission",
    description: "Access to the main event area",
    isVip: false,
    count: 100,
    price: 20.0,
  },
  {
    ticketId: 2,
    ticketName: "VIP Pass",
    description: "Exclusive VIP access with perks",
    isVip: true,
    count: 5,
    price: 50.0,
  },
];

// Initialize an array of cart items with default values for a user identified by userId.
const cartItems: CartItem[] = [
  {
    userId: 1234,
    tickets: [],
  },
];

// Export the array of tickets and cart items for use in other parts of the application.
export default { tickets, cartItems };
