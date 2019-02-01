
const addToCart = (state, product) => {
    state.products.push(product);
}

const removeFromCart = (state, index) => {
    state.products.splice(index, 1);
}

const resetCart = state => {
    state.products = [];
}


export const mutations = {
    addToCart,
    removeFromCart,
    resetCart
}