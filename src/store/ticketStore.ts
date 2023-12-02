// store.ts
import { defineStore } from "pinia";
import tempData from "../temp-data";

const useTicketStore = defineStore({
  id: "ticketStore",
  state: () => {
    return {
      tickets: tempData.tickets,
    };
  },
});

export default useTicketStore;
