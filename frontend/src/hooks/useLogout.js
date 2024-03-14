// client/src/hooks/useLogout.js

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Replace with your authentication context
import axios from 'axios';

const serverUrl = 'http://localhost:5000/api/clear-data'; // Replace with your server's URL

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext); // Replace AuthContext with your actual context

  const logout = async () => {
    try {
      // Clear user-related data from local storage
      localStorage.removeItem('user'); // Replace 'user' with your storage key

      // Clear user data on the server-side
      await clearServerData();

      // Dispatch a logout action to reset the authentication state
      dispatch({ type: 'LOGOUT' }); // Replace with your actual logout action

      // Redirect or perform additional cleanup as needed
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  const clearServerData = async () => {
    try {
      const response = await axios.delete(serverUrl);

      // Handle the response from the server (e.g., show a success message)
      console.log(response.data.message);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error clearing data:', error);
    }
  };

  return { logout };
};
