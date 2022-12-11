import React from 'react'
import { Collapse,CardContent,Card,CardMedia, Avatar, IconButton, Typography,CardActions,CardHeader, Checkbox } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
export const Posts = (props) => {
  return (
     <Card sx={{margin:"35px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="December 9, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={props.image}
        alt="Lionel Messi"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
