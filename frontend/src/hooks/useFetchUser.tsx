import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useFetchUser = (id: number, pass: string) => {
  const [userFound, setUserFound] = useState(false);
  
  const fetchUser = async (id: number, pass: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        params: {
          id: id,
          pass: pass
        }
      });
      const data = response.data;
      setUserFound(true)
      console.log(data);
      return data;
    } catch (err) {
      setUserFound(false);
      console.error(err);
    }
  }
  useEffect(() => {
    fetchUser(id,pass);
  })

  return userFound;
}
