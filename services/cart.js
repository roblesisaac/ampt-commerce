import Cart from '../models/cart';

export default {
    addItemToCart: async (cart) => {
        try {
            return await Cart.save(cart);
        } catch (error) {
            console.error(error);            
            return error.message;
        }
    }
}