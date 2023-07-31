import { Button } from "@material-ui/core";
import React from "react";
import { styles } from './Style';

export const Array=()=>{
    const book =["Bhagvatgita","wings of fire","Ramayan"];
    const classes=styles();
    return(
        book.map((iteam)=>{
            return(
                <h1 className={classes.wraaper}>
                    <h3>{iteam}</h3>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                    className="click-btn"
                    classes={{}}
                    onClick={()=>{
                        alert("You itam added sucessfully")
                    }}>
                    Add to cart</Button>
                </h1>
            );
        })
    );
}