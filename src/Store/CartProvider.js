import { useReducer } from 'react'

import CartContext from './Cart-context'

const defaultCartState = { items: [], totalAmount: 0 }

const cartReducer = (state, action) => {
    let updatedTotalAmount
    let existingCartItemIndex 
    let updatedItems
    
    switch (action.type) {
        case 'ADD':
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
            existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

            const existingCartItem = state.items[existingCartItemIndex]
    
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        case 'REMOVE':
            existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
            const existingItem = state.items[existingCartItemIndex]

            updatedTotalAmount = state.totalAmount - existingItem.price

            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id)
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        default:
            return defaultCartState
    }
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCarHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCarHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCarHandler,
        removeItem: removeItemFromCarHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider