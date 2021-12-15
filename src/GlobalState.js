import { createGlobalState } from "react-hooks-global-state"

const initialState = {
  cart: []
}

const { useGlobalState } = createGlobalState(initialState)
export { useGlobalState }
