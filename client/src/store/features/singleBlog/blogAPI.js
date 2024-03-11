import axios from "axios";

export const getBlog = async(id) => {
    const response = await axios.get(`/posts/blogs/${id}`);
    return response.data;
}