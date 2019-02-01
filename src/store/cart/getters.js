
const addedProducts = state => state.products

const productsLength = state => state.products.length;

const totalPrice = state => state.products.map(product => product.price).reduce((prev, current) => prev + current, 0);

export const getters = {
    addedProducts,
    productsLength,
    totalPrice
}