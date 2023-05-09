import React, { useState, useCallback, useEffect } from 'react'
import { useFetchUser } from './useFetchUser';

interface UserCredentials {
    username: number;
    password: string;
}

const useAuth = ({ username, password }: UserCredentials) => {
    const [auth, setAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [usernameStr, setUsernameStr] = useState("")
    const userFound = useFetchUser(username, password);

    const authUser = useCallback(() => {
        if (userFound || usernameStr === 'admin' && password === 'admin') {
            if (usernameStr === 'admin') {
                setIsAdmin(true);
            }
            else
                setIsAdmin(false);
            setAuth(true);
        }
        else
            setAuth(false);
    }, [userFound, password, setIsAdmin, usernameStr])

    useEffect(() => {
        window.localStorage.setItem('auth', auth.toString());
        authUser();
        const storedUsername = window.localStorage.getItem('username');
        setUsernameStr(storedUsername!)
    }, [authUser, auth,setUsernameStr])

    return { auth, isAdmin };
}

export default useAuth
