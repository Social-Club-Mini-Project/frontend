import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useSearchPost = () => {
    const [post, setPost] = useState<{}[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const searchForPost = async (userID: number) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getpostID`, {
                params: {
                    id: userID
                }
            })
            const data = response.data
            setPost(data)
            if (userID)
                setIsSearching(true);
            else
                setIsSearching(false);
        } catch (err) {
            console.error(err);
        }
    }
    
    return { post, searchForPost, isSearching };
}