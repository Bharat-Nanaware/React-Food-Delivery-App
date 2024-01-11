import React from 'react'
import Header from '../../components/Layouts/Header';
import Meals from '../../components/Meals/Meals';
import { useState } from "react";
import Footer from '../../components/Layouts/Footer';
import CartProvider from '../../store/CartProvider';
import Cart from '../../components/Cart/Cart';

export default function Section2() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <section className="hero_section">

        <Meals />
        
      </section>
      </CartProvider>
      <Footer />
    
    </>
  )
}
