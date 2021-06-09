import classes from './Checkout.module.css'
import { useRef, useState } from 'react'

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    })

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const isEmpty = (value) => {
        return value.trim() === ''
    }

    const isNotFiveChars = (value) => {
        return value.trim().length !== 5
    }

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalIsValid = !isNotFiveChars(enteredPostal)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid,
        })

        const formIsValid =
            enteredStreetIsValid &&
            enteredNameIsValid &&
            enteredPostalIsValid &&
            enteredCityIsValid

        if (!formIsValid) {

            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        })

    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} className={!formInputValidity.name ? classes.errorMsg : ''}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} className={!formInputValidity.street ? classes.errorMsg : ''}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} className={!formInputValidity.postalCode ? classes.errorMsg : ''}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} className={!formInputValidity.city ? classes.errorMsg : ''}/>
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
          </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout