import React from 'react'
import { Inter } from '@next/font/google'
import Box from '@mui/material/Box'
import Button from './Button'
import { Post } from './post'
import { SearchBar } from './SearchBar'
import { PostsProps } from '@/types/props'

const PostsSection = (props: PostsProps) => {

    const openPopUp = () => {
        if (!props.buttonPopUp)
            props.setButtonPopUp(!props.buttonPopUp);
    }

    return (
        <>
            <Box sx={props.buttonPopUp && { filter: 'blur(2px)' }}>
                <div className='flex flex-row sm:m-0 -mx-20'>
                    <Button className='p-4 m-32 text-md font-bold whitespace-nowrap' onClick={openPopUp}>New Post</Button>
                    <SearchBar {...props} />
                </div>
                {props.posts && props.posts.map((post: any, index) => (<Post key={index} {...post} pfp={props.pfp} handleDeletePost={props.handleDeletePost} username={props.userID} />))}
            </Box>
        </>
    )
}

export default PostsSection;