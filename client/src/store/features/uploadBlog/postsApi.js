import axios from 'axios';

export const addPosts = async (postData) => {
    const response = await axios.post('/blogs/', postData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });
    return response.data;
  };

