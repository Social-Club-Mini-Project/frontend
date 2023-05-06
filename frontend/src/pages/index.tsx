import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Box from '@mui/material/Box'
import LoginPopUp from '@/components/loginPopUp'

const LogIn = () => {

    const [onLoadPopUp, setOnLoadPopUp] = useState(true);

    // useEffect(() => {
    //     const userAuth = window.localStorage.getItem('auth');

    //     if (userAuth === 'false')
    //         window.localStorage.removeItem('likes');
    // }, [])

    return (
        <>
            <Head>
                <title>LogIn Page</title>
            </Head>
            <Box >
                {onLoadPopUp && <LoginPopUp onLoadPopUp={onLoadPopUp} setOnLoadPopUp={setOnLoadPopUp}  />}
            </Box>
        </>
    )
}

export default LogIn