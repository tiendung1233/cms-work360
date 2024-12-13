// import { useSyncExternalStore } from 'react'

// type State = {}

// type Selector<T> = (state: T) => any

// type Listener = () => void

// type Store<T> = {
//   getState: () => T
//   setState: (fn: (state: T) => T) => void
//   subscribe: (listener: Listener) => () => void
// }

// export const createStore = <T extends State>(initialState: T): Store<T> => {
//   let state = initialState
//   const getState = () => state
//   const listeners = new Set<Listener>()
//   const setState = (fn: (state: T) => T) => {
//     state = fn(state)
//     listeners.forEach((listener) => listener())
//   }
//   const subscribe = (listener: Listener) => {
//     listeners.add(listener)
//     return () => listeners.delete(listener)
//   }
//   return { getState, setState, subscribe }
// }

// export const useStore = <T extends State>(store: Store<T>, selector: Selector<T>) => {
//   return useSyncExternalStore(store.subscribe, () => selector(store.getState()))
// }
