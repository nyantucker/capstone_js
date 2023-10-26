import { listHeThongRap, userLocalStorage } from "../../service/localStorage"
import { SET_INFO, SET_LIST_RAP } from "../constant/user"

const initialState = {
    info: userLocalStorage.get(),
}

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_INFO:
    state.info = payload
    return { ...state }

  default:
    return state
  }
}

export default userReducer
