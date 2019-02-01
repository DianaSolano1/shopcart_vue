const setProducts = (state, products) => {
    state.products = products;
    console.log(state.products);
}


export const mutations = {
    setProducts
}