import axios from 'axios';
import { APIURL } from '../config';

export const getProducts = async (context) => {

    const products = await axios.get(`${APIURL}/products`);

    context.commit('setProducts', products);
}