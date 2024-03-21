import React from "react";
import {Box} from "@mui/system";
import { Button,Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box  position={"relative"} width="100%" height="90vh">
            <img src="/road.jpg" alt="Road" width={"100%"} height="70%"></img>
            <Typography   fontFamily={"kajiro"}  fontSize={60}
             variant ="h3" textAlign={"center"} width={"100%"} sx={{position:"absolute", top: "0px" , color:"purple" , background:"#B2C8D"}}>
            Dare to Live the Life You Wanted
            </Typography>
            <Box width="100%" 
            height="30%" 
            display={"flex"} 
            flexDirection={"column"}
            >
                <Typography fontFamily={"Kajiro"} fontSize={60} textAlign={"center"} variant="h4" padding={4} color={"Black"}>
                    SHARE YOUR TRAVEL DIARIES WITH THE WORLD!
                </Typography>
                <Box margin={"auto"}>
                    <Button variant="outlined" sx={{mr:2}}>
                        Share Your Story
                    </Button>
                    <Button 
                    LinkComponent={Link}
                    to="/diaries"
                    variant="contained" sx={{ml:2}}>
                        View Diaries
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
