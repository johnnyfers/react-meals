import classes from './AvailableMeals.module.css'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'

import { useState, useEffect, useCallback } from 'react'


const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMealsHandler = useCallback(() => {
        setIsLoading(true)
        fetch('https://react-http-class-default-rtdb.firebaseio.com/meals.json')
            .then((res) => { return res.json() })
            .then((data) => {
                const mealsArray = [];

                for (const key in data) {
                    mealsArray.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    })
                }

                setMeals(mealsArray)
                setIsLoading(false)
            }
            )
    }, [])

    useEffect(() => {
        fetchMealsHandler()
    }, [fetchMealsHandler])


    return (
        <section className={classes.meals}>
            <Card>
                {isLoading && <p>Loading...</p>}
                <ul>
                    {meals.map(meal =>
                        <MealItem
                            key={meal.id}
                            id={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />
                    )}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals