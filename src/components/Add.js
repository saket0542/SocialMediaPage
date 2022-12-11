import { Box, Fab, IconButton, Modal, Tooltip, Typography,styled,Avatar, TextField,Button} from '@mui/material'
import React from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideocamIcon from '@mui/icons-material/Videocam';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import saket from './saket.jpg'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PhotoSizeSelectActual from '@mui/icons-material/PhotoSizeSelectActual';
export const Add = () => {
  const [post,setpost]=useState(false)
  function clickHandler()
  {
    setpost(!post)
  }
  const CustomModal=styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  })
  const CustomBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"5px",
    marginBottom:"20px"
  })
  const CustomIconBox=styled(Box)({
    display:"flex",
    marginBottom:"10px"
  })
  return (
   <>
    <Tooltip title="Add a new Post"sx={{position:"fixed",bottom:20,left:{xs:"calc(45%)",sm:40}}}>
  <IconButton onClick={clickHandler}>
  <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  </IconButton>
</Tooltip>
<CustomModal
        open={post}
        onClose={(e)=>{setpost(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{display:"flex",flexDirection:"column",width:450,height:300,bgcolor:"background.default" ,color:"text.primary",padding:"10px",borderRadius:"15px"}}>
        <Typography variant='h6' color="grey" textAlign="center">Create Post</Typography>
        <CustomBox>
        <Avatar alt="Saket Saraogi" src={saket} />
        <Typography variant="span" fontWeight={500}>Saket Saraogi</Typography>
        </CustomBox>
        <TextField sx={{marginBottom:"10px"}}
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind..."
        />
        <CustomIconBox>
        <EmojiEmotionsIcon color='error'/>
        <PhotoSizeSelectActualIcon color="success"/>
        <VideocamIcon color='secondary'/>
        <AttachFileIcon color="primary"/>
        </CustomIconBox>
        <Button variant="contained">Post</Button>
        </Box>
      </CustomModal>
   </>
  )
}
