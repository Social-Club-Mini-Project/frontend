import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const useFetchPosts = () => {
    const [postData, setPostData] = useState([]);
    
    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
            const data = response.data;
            setPostData(data);
            
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    },[])

    return postData;
}

// fetchPosts();