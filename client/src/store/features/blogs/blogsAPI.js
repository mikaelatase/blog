import publicAxios from "../../../components/publicAxios.js"

export const getBlogs = async() => {
    const response = await publicAxios.getBlogs('/blogs');
    return response.data;
}