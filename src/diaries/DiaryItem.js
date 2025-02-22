import {
    Alert,
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Snackbar,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
  import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  import React, { useState } from "react";

  // import { Link } from "react-router-dom";
  
  import { Link } from "react-router-dom";
import { postDelete } from "../api-helpers/helpers";
//   import { postDelete } from "../api-helpers/helpers";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const DiaryItem = ({
  title,
  description,
  image,
  location,
  date,
  id,
  user,
  name
}) =>{
    const [open, setOpen] = useState(false);
const isLoggedInUser = () =>{
  if(localStorage.getItem("userId") === user) {
    return true;
  }
  return false;
};


const handleDelete = () =>{
    postDelete(id)
    .then((data)=>console.log(data))
    .catch((err) =>console.log(err));
    setOpen(true);
}

    return   (
        <Card sx={{ width: "50%" , 
        height:"auto",
         margin:1,
         padding:1,
         display:"flex",
         flexDirection:"column",
         boxShadow:"5px 5px 10px #ccc"}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                {/* {name.charAt(0)} */}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <EditLocationAltIcon />
              </IconButton>
            }
            title={location}
            header={location}
            subheader={date}
          />
          <img
             height="194"
            // src="neom-ckfXPMb2_BI-unsplash.jpg"
            src={image}
            alt={title}
          />
          <CardContent>
            <Typography 
            paddingBottom={1}
            variant='h6'
            color="text.secondary"
            >
               {title}
            </Typography>
            <hr/>

            <Box paddingTop={1} display={"flex"}>
                <Typography fontFamily={"Tahoma"} width="170px" fontWeight={"bold"} variant='caption'>
                   {name}
                </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
            </Box>
          </CardContent>
         {isLoggedInUser() && 
         <CardActions sx={{ml:"auto"}}>
            <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
              <ModeEditOutlineIcon></ModeEditOutlineIcon>
              </IconButton>
            <IconButton onClick={handleDelete} color="error">
              <DeleteForeverIcon></DeleteForeverIcon>
              </IconButton>
          </CardActions>
     }
     <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
        </Card>
      );
};

export default DiaryItem;