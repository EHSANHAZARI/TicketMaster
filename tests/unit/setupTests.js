// setupTests.js
import { createPinia } from "pinia";

// Create a Pinia instance before running tests
const pinia = createPinia();

export { pinia }; // Export the Pinia instance for reuse in tests
