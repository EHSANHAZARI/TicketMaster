# TicketMaster Project Implementation Overview

## Vue.Js.docx Documentation

This document encapsulates all my project-related notes, encompassing insights gained from previous Vue and Pinia studies. It serves as a comprehensive repository of knowledge accumulated during the course of this project.

## Project Setup

1. **Download Repository:**
   - Clone the TicketMaster repository from the main branch.

2. **Install Dependencies:**
   - Run `npm install` to install project dependencies.

3. **Additional Setup:**
   - Install additional dependencies:
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

## Note

- The project emphasizes reactivity in Vue through Pinia for state management.
- Components are organized with a focus on readability, testability, and maintainability.

*Note: Ensure you run the necessary `npm install` commands for pinia and vue-router as specified.*
