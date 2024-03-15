import AmptModel from 'ampt-model';

const Cart = AmptModel('cart', {
    // userid: (_, { req }) => req.user._id,
    cartItems: [
        {
            sku: String,
            qty: Number
        },
    ],
});

export default Cart;