import React from 'react'
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div>
        <img id="carrito" src="./img/carrito.png" alt="Carrito de compras"/>
        <strong id="numCarrito">0</strong>
    </div>
  )
}

export default CartWidget