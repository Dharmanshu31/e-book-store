import { useState } from "react";
import cart from '../src/assets/cart.png'
import { Button, Grid } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { AddShoppingCart } from "@material-ui/icons";
export const Cart = () => {
    const [x, setX] = useState(1);
    return (
        <div>
            <img className="cartimg" src={cart} />
            <table className="cart">
                <tr>
                    <td><button onClick={() => setX(x - 1)}>-</button></td>
                    <td>{x}</td>
                    <td><button onClick={() => setX(x + 1)}>+</button></td>
                </tr>
            </table>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddShoppingCart/>}>
                    Buy Know
                </Button>
                <br/>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Delete/>}>
                    Remove
                </Button>
            </Grid>
        </div>
    )
}