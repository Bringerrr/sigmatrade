import { SET_SIDEBAR, SET_DEFAULT_SIDEBAR } from './ui.types'

const initState = {
  leftSidebar: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_SIDEBAR:
      return {
        ...state,
        leftSidebar: action.payload
      }
    case SET_DEFAULT_SIDEBAR:
      return {
        ...state,
        leftSidebar: false
      }
    default:
      return state
  }
}
