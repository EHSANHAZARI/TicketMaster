/**
 * Interface representing a ticket with essential details.
 *
 * @interface Ticket
 * @property {string} ticketName - The name of the ticket.
 * @property {string} description - A brief description of the ticket.
 * @property {boolean} isVip - Indicates whether the ticket is for VIP access.
 * @property {number} count - The quantity of tickets available.
 * @property {number} price - The price of each ticket.
 */
export interface Ticket {
  ticketName: string;
  description: string;
  isVip: boolean;
  count: number;
  price: number;
}

export default Ticket;
