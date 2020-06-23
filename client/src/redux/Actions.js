import axios from 'axios'
const invoke = `https://5b4w56obcf.execute-api.us-east-1.amazonaws.com/prod`
export const getComments = () => async (dispatch) => {
  try {
    const res = await axios.get(`${invoke}/comments`)
    console.log("data: ", res.data);
    dispatch({
      type: `GET_COMMENTS`,
      payload: res.data
    })
  } catch (error) {
    console.log("GET ERROR: ",error.message);
  }
}