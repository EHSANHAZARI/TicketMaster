# TicketMaster Project Implementation Overview

## Vue.Js.docx Documentation

This document encapsulates all my project-related notes, encompassing insights gained from previous Vue and Pinia studies. It serves as a comprehensive repository of knowledge accumulated during the course of this project.

## Project Setup

1. **Download Repository:**
   - Clone the TicketMaster repository from the main branch.

2. **Install Dependencies:**
   - Run `npm install --force` to install project dependencies.
   - Run `npm run dev` to run the project
   - Run `npm run test:unit` to run the unit testing"

   **Additional Setup:**
   - Install additional dependencies if needed:
     - `npm install pinia`
     - `npm install vue-router@4`
4. **Main.ts Configuration:**
   - Inside `main.ts`, configured routes using `routeRecordRaw` array.
   - Utilized `createWebHistory` for efficient page navigation storage.

## Pinia State Management

### cartItemsStore.ts

- Managed cart-related information and functionality.
  - `addToCart`: Add the ticketId to cartItems.
  - `populateCartItems`: Return names and populate ids for meaningful display.
  - `removeFromCart`: Remove the cartId from cartItems.

### ticketStore.ts

- Managed tickets defined in `temp-data.ts`.
  - `increment`: Add a new ticket (usable in the admin page).
  - `decrement`: Remove a ticket.

### Types

- Ensure type safety by defining types for cartItems and Ticket.

## Components

- Utilized Pinia for storing variables and accessing functionalities.
- Breaked down components into smaller, modular ones for easier testing and debugging.

## Unit Tests : 
- Open the `tests/unit` folder.
- Navigate to the `component.spec.js` file to review tests related to the component's mounting and essential functionalities.

### Tested here
- Tested the mounting of the component.
- Checked if adding "isVip" results in the appearance of VIP-related information on the ticket.
- Verified that calling the `addToTicket` function increases the length of the associated array.
- Ensured that calling `addToCart` triggers the execution of the `populateCartItems` function, confirming proper functionality.


## Note

- The project emphasizes reactivity in Vue through Pinia for state management.
- Components are organized with a focus on readability, testability, and maintainability.

*Note: Ensure you run the necessary `npm install` commands for pinia and vue-router as specified.*
