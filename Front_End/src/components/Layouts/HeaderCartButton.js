import classes from '../../styles/HeaderCartButton.css';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from "react";
import '../../styles/HeaderStyle.css'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

    const OnCartClick = () => {
        if (items.length === 0) {
            alert("Please Add Food To Your Cart !!");
        }
        else {
            props.onClick();
        }
    };

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (

        <Link onClick={OnCartClick}>
            <Nav.Link className={btnClasses} >
                <div className="cart">
                    <i class="bi bi-bag fs-5"></i>
                    <em className="roundpoint">
                        <span className="badge">{numberOfCartItems}</span>
                    </em>
                </div>
            </Nav.Link>


        </Link>
    );
};

export default HeaderCartButton;