import axios from "axios";

export const getBlogs = async(category) => {
    const response = await axios.get(`/posts/blogs/${category}`);
    return response.data;
}
