// userActions.js

import { loginFail, loginRequest, loginSuccess } from "./reducers";
const baseUrl = "http://localhost:3700"; // Include protocol in base URL
export const registerRequest = (userData) => async (dispatch) => {
  try {
    // Dispatch an action to indicate registration request is in progress
    dispatch(loginRequest());

    // Make the API call to register the user
    const response = await fetch(`${baseUrl}/user/newuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // Dispatch an action to indicate successful registration
      dispatch(loginSuccess(data));
      return data;
    } else {
      // Dispatch an action to indicate registration failure
      console.log(data);
      dispatch(loginFail(data));
      // throw new Error(data.message)
    }
  } catch (error) {
    console.error("Error registering user:", error);
    // Dispatch an action to indicate registration failure
    dispatch(loginFail(error));
  }
};
