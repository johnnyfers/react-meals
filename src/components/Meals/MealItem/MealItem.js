import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm/MealItemForm'

const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {props.price.toFixed(2).replace('.', ',')}
                </div>
            </div>

            <div>
                <MealItemForm/>
            </div>
        </li>
    )
}

export default MealItem