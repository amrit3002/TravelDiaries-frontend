import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Tab, Tabs} from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { useSelector } from "react-redux";

const linksArr = ["home","diaries","auth"];
const loggedInLinks=["home","diaries","add","profile"];
const Header = () => {
    const isLoggedIn=useSelector((state) =>state.isLoggedIn);

    const [value,setValue] = useState();
    return (
    <AppBar sx = {{bgcolor:"transparent", position:"sticky"} }>
        <Toolbar>
        <ModeOfTravelIcon sx ={{color:"green"}}/>
        <Tabs 
        value= {value}  onChange= {(e,val) =>setValue(val)} sx={{ml:"auto", textDecoration:"none"}}>
        { isLoggedIn
        
      ?  loggedInLinks.map((link) =>(
            <Tab 
            LinkComponent={Link}
            to={`/${link==="home" ? "" : link}`}
            sx={{textDecoration:"none",":hover":{
                textDecoration:"underline",
                textUnderlineOffset:"15px"
            },
        }} 
        key={link} 
        label={link}
         />
        ))
        
       : linksArr.map((link) =>(
            <Tab 
            LinkComponent={Link}
            to={`/${link==="home" ? "" : link}`}
            sx={{textDecoration:"none",":hover":{
                textDecoration:"underline",
                textUnderlineOffset:"15px"
            },
        }} 
        key={link} 
        label={link}
         />
        ))}
        </Tabs>
        </Toolbar>
    </AppBar>
    );
};

export default Header;