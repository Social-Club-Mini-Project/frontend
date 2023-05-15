import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useCreatePost = () => {

    
    const createPost = async (post: {}) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`,post)
            const data = response.data;
        } catch (err) {
            console.error(err);
        }
    }

    return createPost;
}