import { useRef, useState } from 'react'

import classes from './MealItemForm.module.css'
import Input from '../../../UI/Input/Input'

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 ||
            enteredAmount < 1 ||
            enteredAmount > 10
        ) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="amount"
                input={
                    {
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '10',
                        step: '1',
                        defaultValue: '1'
                    }
                } />
            <button> + Add </button>
            {!amountIsValid && <p>Please enter a valid amount (1 - 10)</p>}
        </form>
    )
}

export default MealItemForm