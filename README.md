# Getting Started

Download the project, please do not fork the project.

Make sure you have latest node.js installed on your machine.

Run the following commands in the project directory:

```npm install```

```npm run dev```

# Vue 3 + TypeScript + Vite

Develop a Vue.js web application that simulates website for selling tickets. The application will have three main pages: an admin page for creating tickets and a home page to display them. The challenge will assess your proficiency in Vue.js, state management, component design, and Typescript.

The application should be responsive and function properly on modern web browsers.

Tailwind CSS is included in the project. You may use it to style your application or use CSS framework or UI library of your choice.


# Core Pages:

## Admin Page (/admin):

This is the page where tickets are created.

Create an interface with input fields to add new event ticket items. Fields should include: Ticket Name, Description, IsVIP (checkbox), Count (number of tickets available), and Price.
Implement a submission form that adds the ticket data to a centralized store upon submission.
Show a list of all created tickets. Each ticket should have a button to delete the ticket from the store.

## Index Page (Home Page):

This is the page where tickets are displayed and can be added to shopping cart.

Display a list of all created tickets. 
VIP tickets should be visually distinguishable from regular tickets (e.g., different color, badge, etc.).
Add a button to each ticket to add the ticket to a shopping cart.

## Shopping Cart (/cart):
Create a shopping cart that displays all tickets that have been added to the cart.

Note: The shopping cart does not need to persist on page reload. Shopping cart doesn't need to include checkout functionality.


# Functionality:

State Management: Use Vue's reactivity system, Pinia, Vuex, or the Composition API for managing the application state.
Data Handling: Implement mock data handling. Data does not need to persist on page reload unless you choose to implement local storage or a backend service.
Routing: Use Vue Router to navigate between the Admin and Index pages.


# Code Quality and Standards:
Write clean, well-structured, and commented code.
Follow best practices for Vue.js and Typescript.


# Bonus Points:
Testing (Optional, but recommended): Write basic unit tests for key components.


# Submission:

Please submit your code in a public GitHub repository and send us the link. Include a README.md file with instructions on how to run the application.
