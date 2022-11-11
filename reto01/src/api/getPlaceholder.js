import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

export const getPlaceholder = async(id) => {
    const { data } = await axios.get(`${URL}/${id}`);
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        city: data.address.city,
    }
}
