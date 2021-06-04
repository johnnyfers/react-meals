import CartContext from './Cart-context'

const CartProvider = (props) => {
    const addItemToCarHandler = item => {}
    
    const removeItemFromCarHandler = id => {}


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCarHandler,
        removeItem: removeItemFromCarHandler
    }

    return (
        <CartContext.Provider values={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider