import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { Note } from "@/lib/types"
import NoteManager from "./lib/NoteManager"
import db, { FuyomiDatabase } from "@/database"

// ストアの型を定義する
export interface State {
  currentNoteName: Note
  currentLevel: number
  points: number
  // db: FuyomiDatabase;
}

// InjectionKeyを定義する
export const key: InjectionKey<Store<State>> = Symbol()

// IndexedDBを作成する
const fuyomiDB = new FuyomiDatabase()

// Storeを作成する
export const store = createStore<State>({
  state: {
    currentNoteName: "F4",
    currentLevel: 0,
    points: 0,
  },
  getters: {
    getCurrentNoteName: (state) => {
      return state.currentNoteName
    },
  },
  actions: {
    addPoint(context) {
      context.commit("addPoint")
      fuyomiDB.table("userdata").put({
        id: 1, //総合得点のレコードは使いまわす。
        points: context.state.points,
      })
    },
    async getInitialValue(context) {
      const res = await fuyomiDB.table("userdata").get(1)
      console.log(res)
      context.state.points = res.points
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
    addPoint(state) {
      state.points++
    },
  },
})

// 独自のuserStoreメソッドを定義する
export function useStore() {
  // InjectionKeyをuseStoreメソッドに渡す
  return baseUseStore(key)
}
