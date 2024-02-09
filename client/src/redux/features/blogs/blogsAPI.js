import publicAxios from "../../../components/publicAxios"

export const getBlogs = async() => {
    const response = await publicAxios.getBlogs('/blogs');
    return response.data;
}