import axios from 'axios';

// Replace 'http://localhost:5000/api/clear-data' with your server's URL
const serverUrl = 'http://localhost:5000/api/clear-data';

async function clearServerData() {
  try {
    const response = await axios.delete(serverUrl);

    // Handle the response from the server (e.g., show a success message)
    console.log(response.data.message);
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error('Error clearing data:', error);
  }
}

export { clearServerData };
