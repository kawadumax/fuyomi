import { createStore } from "vuex";

const store = createStore({
  state() {
    return { currentNoteName: "C4" };
  },
});
export default store;
