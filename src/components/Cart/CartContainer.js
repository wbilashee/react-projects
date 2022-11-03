import React from "react";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import loadingImg from "../../images/loading.gif";

export default function CartContainer() {
    const { cart, total, loading, clear } = useGlobalContext();

    if (loading) {
        return <div className="page-loading">
            <img src={loadingImg} alt="loading" />
        </div>
    }

    return (
        <main className="cart">
            <Navbar />
            <section className="cart-container">
                <h2>Your Bag</h2>
                <article className="cart-items">
                    {cart.map(item => {
                        return <CartItem key={item.id} {...item} />
                    })}
                    {cart.length === 0 && <h3>Your bag is empty</h3>}
                </article>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>total <span>${total}</span></h4>
                    </div>
                    <button
                        onClick={clear}
                        className="clear-btn"
                    >clear cart</button>
                </footer>
            </section>
        </main>
    )
}
