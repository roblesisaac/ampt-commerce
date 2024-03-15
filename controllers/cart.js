import cart from '../services/cart';

export default {
    addItemToCart: async (req, res) => {
        const addedItem = await cart.addItemToCart(req.body);

        res.json(addedItem);
    }
}