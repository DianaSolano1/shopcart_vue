import { actions } from "./products/actions";
import { getters } from "./products/getters";
import { mutations } from "./products/mutations";


export default {
    state: {
        products: []
    },
    actions: actions,
    mutations: mutations,
    getters: getters
}