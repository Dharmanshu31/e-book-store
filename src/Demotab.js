import { useState } from "react"
import './App.css';
import { AppBar, Tab,Tabs } from "@material-ui/core";

export const Demotab = () => {
    const [toggle, setToggle] = useState(0);
    return (
        <div>
            <AppBar position="static">
                <Tabs value={toggle}
                onChange={(e,val)=>{setToggle(val)}}>
                    <Tab label="OLD" />
                    <Tab label="NEW" />
                    <Tab label="NOT AVAILABLE" />
                </Tabs>
            </AppBar>
        </div>
    );
}
