import React, { useCallback, useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import Box from '@mui/material/Box'
import Profile from './profile'
import Image from 'next/image'
import useAdmin from '@/hooks/useAdmin'

export const Post = (props) => {

    const [liked, setLiked] = useState(false);
    const [btnTxt, setBtnTxt] = useState("Like");
    const [likes, setLikes] = useState(0);
    const admin = useAdmin();

    const post = props;

    const handleLike = () => {

        if (!liked) {
            setLikes(post.likes + 1);
            setLiked(!liked);
            setBtnTxt("Unlike");
        }
        if (liked) {
            setLikes(post.likes - 1);
            setLiked(!liked);
            setBtnTxt("Like");
        }
        // post.handleUpdateLikes(post.id, likes);
    }
    
    useEffect(() => {
        // if (likes > 0) {
        //     window.localStorage.setItem('likes', likes.toString());

        // }
        // if (likes === 0)
        //     window.localStorage.removeItem('likes');
    }, [post, likes, setLikes])

    return (
        <>
            <Box className='post-container m-auto flex flex-col' sx={{ width: '50%', minWidth: '30rem' }}>
                <div className='text-right h-0'>
                    {(post.userID === parseInt(post.username) || admin) && <button className='rounded-full w-7 h-7 bg-red-600' onClick={() => post.handleDeletePost(post.postID)}>X</button>}
                </div>
                <Profile {...props} />
                <span className='post'>{post.text}</span>
                {/* {post.img.url && <div className='py-4'>
                <Image className='rounded-md w-80 h-80' src={post.img.url} alt={post.img.name} width={200} height={200} />
                </div>} */}
                <Box sx={{ textAlign: 'right' }}>
                    {liked && <label htmlFor="" style={{ padding: '5px' }}>{likes}</label>}
                    <button className='border-none bg-blue-500 p-2 rounded-md hover:active:bg-slate-200 my-2' onClick={handleLike}>{btnTxt}</button>
                </Box>
            </Box>
        </>
    )
}