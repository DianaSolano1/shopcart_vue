import axios from 'axios';
import { APIURL } from '../config';

const getProducts = async (context) => {

    const { data } = await axios.get(`${APIURL}/products`);

    console.log(data);

    context.commit('setProducts', data);
}

export const actions = {
    getProducts
}