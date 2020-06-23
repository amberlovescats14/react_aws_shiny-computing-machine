import { combineReducers } from 'redux'

export const sanityTest = (state = '', action) => {
  switch(action.type){
    default: return state
  }
}

let commentInitialState = {
  loading: true,
  comments: []
}
export const getComments = (state = commentInitialState, action) => {
  const {payload, type} = action
  switch(type){
    case `GET_COMMENTS`:
    return {
      loading: false,
      comments: payload
    }
    default: return state
  }
}

export default combineReducers({
  test: sanityTest,
  commentsData: getComments
})