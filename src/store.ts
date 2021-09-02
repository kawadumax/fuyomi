// import { createStore } from "vuex";

// const store = createStore({
//   state() {
//     return { currentNoteName: "C4" };
//   },
// });
// export default store;

import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { Note } from "@/lib/types";
import NoteManager from "./lib/NoteManager";

// export interface Book {
//   name: string;
//   author: string;
// }

// ストアの型を定義する
export interface State {
  currentNoteName: Note;
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol();

// Storeを作成する
export const store = createStore<State>({
  state: {
    currentNoteName: "C4",
  },
  getters: {
    getCurrentNoteName: (state) => {
      // return state.books ? state.books[0] : ({} as Book);
      return state.currentNoteName;
    },
  },
  mutations: {
    // changeNote(state, { noteName }) {
    //   state.currentNoteName = noteName;
    // },
    changeNote(state) {
      const note = NoteManager.generateNote();
      console.log(note);
      state.currentNoteName = note;
      // state.currentNoteName = note;
    },
  },
});

// 独自のuserStoreメソッドを定義する
export function useStore() {
  // InjectionKeyをuseStoreメソッドに渡す
  return baseUseStore(key);
}
