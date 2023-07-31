import { Button } from "@material-ui/core";
import React from "react";

export const Array=()=>{
    const book =["Bhagvatgita","wings of fire","Ramayan"];
    return(
        book.map((iteam)=>{
            return(
                <React.Fragment>
                    <h3>{iteam}</h3>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    size="small"
                    onClick={()=>{
                        alert("You itam added sucessfully")
                    }}>
                    Add to cart</Button>
                </React.Fragment>
            );
        })
    );
}