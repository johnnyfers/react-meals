import { useContext } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../Store/Cart-context'

import CartItem from './CartItem/CartItem'

const Cart = (props) => {

    const CartCtx = useContext(CartContext)

    const totalAmount = `$${CartCtx.totalAmount.toFixed(2).replace('.', ',')}`
    const hasItems = CartCtx.items.length > 0

    const cartItemRemoveHandler = (id)=> {
       CartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item)=> {
        CartCtx.addItem(item)
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {CartCtx.items.map((item) => 
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )}
        </ul>
    )

    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.buttons}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart