import { makeStyles } from "@material-ui/core/styles";

export const styles =makeStyles((theme)=>({
    wraaper:{
        "& .click-btn":{
            // backgroundColor: "black"
            padding:theme.spacing(1),
            boxShadow:theme.shadows[10]
        }
    }
}));