import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { Note } from "@/lib/types"
import NoteManager from "./lib/NoteManager"

// ストアの型を定義する
export interface State {
  currentNoteName: Note;
  currentLevel: number;
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol()

// Storeを作成する
export const store = createStore<State>({
  state: {
    currentNoteName: "F4",
    currentLevel: 0,
  },
  getters: {
    getCurrentNoteName: (state) => {
      return state.currentNoteName
    },
  },
  mutations: {
    changeNote(state) {
      const level = state.currentLevel
      const note = NoteManager.generateNoteFromLevel(level)
      state.currentNoteName = note
    },
    changeLevel(state, level) {
      state.currentLevel = level
    },
  },
})

// 独自のuserStoreメソッドを定義する
export function useStore() {
  // InjectionKeyをuseStoreメソッドに渡す
  return baseUseStore(key)
}
