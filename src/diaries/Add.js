import React, { useState } from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// import { red } from "@mui/material/colors";
import { addPost } from "../api-helpers/helpers";
import { useNavigate } from "react-router-dom";
const Add = () =>{
    const navigate=useNavigate();
    const[inputs,setInputs]= useState({
        title:"",
        description:"",
        location:"",
        imageUrl:"",
        date:"",
    });
    const handleChange = (e) =>{
     setInputs((prevState) =>({
        ...prevState,
        [e.target.name]:e.target.value,
     }));
    };
    const onResReceived = (data) =>{
        console.log(data);
        navigate("/diaries");
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        addPost(inputs)
        .then(onResReceived)
        .catch((err) =>console.log(err));
    };
    return (
    
     <Box display="flex" 
    flexDirection={"column"}
    width={"100%"}
    height={"100%"}
    >
        <Box display={"flex"} margin={"auto"} padding={2}>
        <Typography variant="h4" fontFamily={"kajiro"} fontSize={"80px"}> Add Your Travel Diary</Typography>
        <TravelExploreIcon sx ={{fontSize:"80px", padding:1,color:"red"}}/>
        </Box>
        <form onSubmit={handleSubmit}>
             <Box padding={3} 
             width={"80%"}
             display={"flex"} 
             margin={"auto"}
             flexDirection={"column"}
             >
                <FormLabel>Title</FormLabel>
                <TextField 
                  onChange={handleChange}
                  name="title"
                  value={inputs.title}
                variant="standard" 
                margin="normal">
                </TextField>
                <FormLabel >Description</FormLabel>
                <TextField 
                onChange={handleChange}
                name="description"
                value={inputs.description}
                variant="standard" 
                margin="normal"></TextField>
                <FormLabel>Image URL</FormLabel>
                <TextField 
                onChange={handleChange}
                 name="imageUrl"
                value={inputs.imageUrl}
                variant="standard" 
                margin="normal"></TextField>

                <FormLabel>Location</FormLabel>
                <TextField 
                onChange={handleChange}
                name="location"
                value={inputs.location}
                variant="standard" 
                margin="normal"></TextField>
                <FormLabel>Date</FormLabel>
                <TextField 
                type="date"
                onChange={handleChange}
                name="date"
                value={inputs.date}
                variant="standard" 
                margin="normal"></TextField>
                <Button  
                type="submit"
                variant="contained" 
                color="success" 
                sx={{
                    width:"60%",
                    margin:"auto",
                    mt:2,
                    borderRadius:7,
                }} >POST</Button>
             </Box>
        </form>
    </Box>
    );
}

export default Add;