import { useState } from "react";
import cart from '../src/assets/cart.png'
import { Button, Grid } from "@material-ui/core";
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
                    color="secondary">
                    Buy Know
                </Button>
            </Grid>
        </div>
    )
}