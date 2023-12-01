// SomeOtherFile.ts
import { Ticket } from "../src/types/Ticket";

const tickets: Ticket[] = [
  {
    ticketName: "General Admission",
    description: "Access to the main event area",
    isVip: false,
    count: 1,
    price: 20.0,
  },
  {
    ticketName: "VIP Pass",
    description: "Exclusive VIP access with perks",
    isVip: true,
    count: 5,
    price: 50.0,
  },
];

export default tickets;
