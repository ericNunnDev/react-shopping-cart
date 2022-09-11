import React from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {
	return (
		<CartContext.Provider value={props.item}>
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
		</CartContext.Provider>
	);
};

export default Item;
