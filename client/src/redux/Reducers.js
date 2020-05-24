import { combineReducers } from 'redux'

export const sanityTest = (state = '', action) => {
  switch(action.type){
    default: return state
  }
}

export default combineReducers({
  test: sanityTest
})