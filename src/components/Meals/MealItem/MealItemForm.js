import { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {

    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState("")

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim() === 0 || enteredAmount < 1 || enteredAmount > 5){
            setAmountIsValid("Please enter an amount between 1 and 5")
            return
        }
        setAmountIsValid("")
        props.onAddToCart(enteredAmountNumber)
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            {amountIsValid}
            <Input 
            ref={amountInputRef}
            label="Amount"
            input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }}/>
            <button>+ add</button>
        </form>
    )
}

export default MealItemForm