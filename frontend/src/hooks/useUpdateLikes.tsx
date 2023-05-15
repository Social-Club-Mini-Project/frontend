import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useUpdateLikes = () => {
    
    const UpdateLikes = async (post: {}) => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/post/like`,post)
            const data = response.data;
        } catch (err) {
            console.error(err);
        }
    }

    // useEffect(() => {
    //     createPost(post);
    // },[post])

    return UpdateLikes;
}