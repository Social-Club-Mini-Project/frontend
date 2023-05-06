import React, { useState, useCallback, useEffect } from 'react'
import { useFetchUser } from './useFetchUser';

interface UserCredentials {
    username: number;
    password: string;
}

const useAuth = ({ username, password }: UserCredentials) => {
    const [auth, setAuth] = useState(false);
    const userFound = useFetchUser(username,password);

    const authUser = useCallback(() => {
        if (userFound)
            setAuth(true);
        else
            setAuth(false);
    }, [userFound])

    useEffect(() => {
        localStorage.setItem('auth', auth.toString());
        authUser();
    }, [authUser, auth])

    return auth;
}

export default useAuth
