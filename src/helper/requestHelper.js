import axios from "axios";
import { API_ENDPOINT } from "../env";
export default async function request(
  api,
  params = {},
  dispatch,
) {
  if (!api) {
    return dispatch({
      name: api,
      type: `${api}_FAILED`,
      status: "FAILED",
      payload: {},
    });
  }

  const requestUrl = `${API_ENDPOINT}/${api}`;

  return new Promise(async (resolve, reject) => {
    let response;

    response = await axios.post(requestUrl, params, {
      timeout: 60000,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    try {
      if (response.status === 200) {
        dispatch({
          name: api,
          status: "SUCCESS",
          type: `${api}_SUCCESS`,
          payload: response.data,
          params,
        });
      } else {
        dispatch({
          name: api,
          type: `${api}_FAILED`,
          status: "FAILED",
          payload: response.data,
        });
      }
      return resolve(response);
    } catch (er) {
      return reject(er);
    } 
  });
}

export const createRequestAction = (api, params) => (dispatch) =>
  request(api, params, dispatch);
