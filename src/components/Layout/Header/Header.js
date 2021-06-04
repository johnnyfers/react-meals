import mealsImg from '../../../assets/meals.jpg'
import classes from '../Header/Header.module.css'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'

const Header = (props) => { 
    return (
    <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="table full of food"/>
        </div>
    </>)
}

export default Header