import React, { useContext,useEffect, useState } from 'react'

import Button from '../UI/Button'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)
    const [btnHighlight, setBtnHighLight] = useState(false)

    const numberOfCartItems = cartCtx.items.reduce( (curNumber, item) => {
        return curNumber + item.amount
    }, 0 )

    const btnClasses = `
        ${classes.button} ${btnHighlight ? classes.bump : ''}
    `

    const { items } = cartCtx

    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setBtnHighLight(true)

        const timer = setTimeout(() => {
            setBtnHighLight(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return(
        <React.Fragment>
            <Button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </Button>
        </React.Fragment>
    )
}

export default HeaderCartButton