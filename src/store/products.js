import { getProducts } from "./products/actions";
import { setProducts } from "./products/mutations";


export default {
    state: {
        products: []
    },
    actions: {
        getProducts: getProducts
    },
    mutations: {
        setProducts: setProducts
    }
}