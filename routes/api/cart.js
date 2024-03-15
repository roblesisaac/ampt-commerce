import cart from '../../controllers/cart';

export default (api) => {
    api.post('/cart-add-item', cart.addItemToCart);
}