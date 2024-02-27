import axios from "axios";

export const getBlogs = async() => {
    const response = await axios.getBlogs('/blogs');
    return response.data;
}