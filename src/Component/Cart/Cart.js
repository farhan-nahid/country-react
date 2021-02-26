import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation=totalPopulation+country.population;
    // }
    const totalPopulation = cart.reduce(  ( sum, country ) => sum + country.population , 0)
    return (
        <div>
            <h1>{cart.length}</h1>
            <h5>Total population : {totalPopulation}</h5>
        </div>
    );
};

export default Cart;