import React, { useCallback, useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import { DialogContent } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import Button from './Button'
import Dialog from '@mui/material/Dialog'
import { propsLoginPopUp } from '@/types/props'
import styles from '@/styles/Login.module.css'
import { useRouter } from 'next/Navigation'
import useAuth from '@/hooks/useAuth'

const LoginPopUp = (props: propsLoginPopUp) => {
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");
    const auth = useAuth({ username: parseInt(username), password: pass })
    const router = useRouter()

    const getPass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    }

    const getUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleWrongCredentials = () => {
        return auth.auth ? 1 : alert('Username or Password is wrong, please check your details and try again!');
    }

    const handleKeyboardSubmit = (e: React.KeyboardEvent<HTMLDivElement> | React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter')
            if (handleWrongCredentials())
                router.push('/app')
    }

    

    useEffect(() => {
        window.localStorage.setItem('username', username.toString());
        window.localStorage.setItem('usertype', auth.isAdmin.toString());
    }, [ username,auth])

    return (
        <>
            <Dialog open={props.onLoadPopUp} >
                <DialogContent sx={{ bgcolor: '#1B1A1A' }}>
                    <Box bgcolor={'#1B1A1A'} display={'flex'} flexDirection={'column'} width={'100%'} height={'100%'} >
                        <Box sx={{ paddingBottom: '30px', marginLeft: 'auto' }}>
                            <label htmlFor="" className={`${styles.label} ${styles.labelMail}`}>Username</label>
                            <TextField size='small' name='username' type={'text'} required value={username} onChange={getUsername} onKeyDown={handleKeyboardSubmit} placeholder='Enter your username' sx={{ bgcolor: 'beige', borderRadius: '4px' }}></TextField>
                        </Box>
                        <Box sx={{}}>
                            <label htmlFor="" className={styles.label}>Password</label>
                            <TextField size='small' type={'password'} required value={pass} onChange={getPass} onKeyDown={handleKeyboardSubmit} placeholder='Enter your password' sx={{ bgcolor: 'beige', borderRadius: '4px' }}></TextField>
                        </Box>
                        <Button type='submit' onClick={handleWrongCredentials} onKeyDown={handleKeyboardSubmit} className='p-2 w-[50%] relative sm:left-[7.4rem] top-2 my-5  '>{auth ? <Link className={styles.link} href='/app'>Log In</Link> : <Link className={styles.link} href='/'>Log In</Link>}</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default LoginPopUp;