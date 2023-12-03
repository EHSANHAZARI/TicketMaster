// Import the Ticket interface to define the structure of ticket objects
import { Ticket } from "../src/types/Ticket";

// Define an array of tickets with detailed information
const tickets: Ticket[] = [
  {
    ticketId: 111,
    ticketName: "General Admission",
    description: "Access to the main event area",
    isVip: false,
    count: 100,
    price: 20.0,
  },
  {
    ticketId: 222,
    ticketName: "VIP Pass",
    description: "Exclusive VIP access with perks",
    isVip: true,
    count: 5,
    price: 50.0,
  },
];

const cartItems: CartItem[] = [
  {
    userId: 1234,
    tickets: [],
  },
];

// Export the array of tickets for use in other parts of the application
export default { tickets, cartItems };
