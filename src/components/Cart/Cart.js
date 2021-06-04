import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'

const Cart = (props)=> {
    const cartItems = <ul className={classes['cart-items']}>
        {
            [{id: 'c1', mae: 'sushi', amount: 2, price:9.99}]
            .map((item)=> <li>{item.name}</li>)
        }   
    </ul>
    
    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.2</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.buttons}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart