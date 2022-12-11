import React from 'react'
import {Box} from '@mui/material'
import { Posts } from './Posts'
export const Feed = () => {

  return (
    <Box flex={4} p={2}>
        <Posts image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messi_martinez_reuters-sixteen_nine.jpg?VersionId=3gEksOrfeqIvJMNQTdv_r66xcZ6KnJiu&size=690:388" content="Little wonder the Argentina camp is perpetually so fraught. Little wonder there is such a sense of yearning. Little wonder there is such a sense of anxious communion between team and fans"/>
        <Posts image="https://images.news18.com/ibnlive/uploads/2022/12/cristiano-ronaldo-8-16706939093x2.jpg?impolicy=website&width=510&height=356/>" content="Ronaldo, who has appeared in five different editions of the World Cup, scoring in each of campaign, was condemned to yet another defeat at the biggest competition in the world."/>
        <Posts image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/messi_martinez_reuters-sixteen_nine.jpg?VersionId=3gEksOrfeqIvJMNQTdv_r66xcZ6KnJiu&size=690:388" content="Little wonder the Argentina camp is perpetually so fraught. Little wonder there is such a sense of yearning. Little wonder there is such a sense of anxious communion between team and fans"/>
        <Posts image="https://images.news18.com/ibnlive/uploads/2022/12/cristiano-ronaldo-8-16706939093x2.jpg?impolicy=website&width=510&height=356/>" content="Ronaldo, who has appeared in five different editions of the World Cup, scoring in each of campaign, was condemned to yet another defeat at the biggest competition in the world."/>
    </Box>
  )
}
