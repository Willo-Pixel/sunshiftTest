import axios from 'axios';

async function getUserData() {
    try {
      const response = await axios.get(`https://randomuser.me/api/`,{params:{results:10}});
      return response.data
    } catch (error) {
      console.error(error);
      return 'Something went wrong'
    }
  }



export { getUserData };