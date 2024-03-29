import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
 
const Cart = props => {

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }

    const cartItems = 
    <ul className={classes["cart-items"]}>{
        cartCtx.items.map( item => 
            <CartItem 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item.id)}
            />)}
        </ul> 
    return(
        <Modal onCloseCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart