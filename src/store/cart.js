import { mutations } from "./cart/mutations";
import { getters } from "./cart/getters";


export default {
    state: {
        products: []
    },
    mutations: mutations,
    getters: getters
}