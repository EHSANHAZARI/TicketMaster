// Type declaration for Vue files to help TypeScript understand them
declare module "*.vue" {
  // Import DefineComponent type from Vue
  import { DefineComponent } from "vue";

  // Define a component variable with the type of DefineComponent
  // The generic types {} (props), {} (state), and any (emits) can be adjusted based on your component's structure
  const component: DefineComponent<{}, {}, any>;

  // Export the component as the default export
  export default component;
}
