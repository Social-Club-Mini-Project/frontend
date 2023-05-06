import React, { useEffect } from 'react'
import axios from 'axios'
import { useFetchPosts } from './useFetchPosts';

const useDeletePost = () => {

    const deletePost = async (id: any) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
                params: {
                    id: id
                }
            });
        } catch (err) {
            console.error(err);
        }
    }
    return deletePost;
}

export default useDeletePost