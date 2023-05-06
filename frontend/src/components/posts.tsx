import React from 'react'
import { Inter } from '@next/font/google'
import Box from '@mui/material/Box'
import Button from './Button'
import { Post } from './post'

const PostsSection = (props) => {

    const openPopUp = () => {
        if (!props.buttonPopUp)
            props.setButtonPopUp(!props.buttonPopUp);
    }

    return (
        <>
            <Box sx={props.buttonPopUp && { filter: 'blur(2px)' }}>
                <Button className='p-4 m-32 text-md font-bold whitespace-nowrap' onClick={openPopUp}>New Post</Button>
                {props.posts && props.posts.map((post, index) => (<Post key={index} {...post} pfp={props.pfp} handleDeletePost={props.handleDeletePost} handleUpdateLikes={props.handleUpdateLikes} />))}
            </Box>
        </>
    )
}

export default PostsSection;