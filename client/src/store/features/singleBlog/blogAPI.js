import axios from "axios";

export const getBlog = async(id) => {
    const response = await axios.get(`/posts/blog/${id}`);
    return response.data;
}

export const deleteBlog = async(id) => {
    const response = await axios.delete(`/posts/blog/${id}`);
    return response.data;
}