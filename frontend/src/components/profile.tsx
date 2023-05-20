import React, { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import { Avatar } from '@mui/material'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from './Button'
import { ProfileProps } from '@/types/props'

const Profile = (props: ProfileProps) => {
    const [username, setUsername] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    const handlePfpUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files?.length > 0) {
            props.setPfp(URL.createObjectURL(e.target.files[0]));
        }
    }

    useEffect(() => {
        if (props.pfp) {
            window.localStorage.setItem('pfp', props.pfp)

        }
        const usertype = window.localStorage.getItem('usertype');
        if (usertype === 'true')
            setIsAdmin(true);
        setUsername(props.userID);
    }, [props.pfp, setUsername, props.userID])

    return (
        <>
            <Box display={'flex'} flexDirection={'row'} margin='20px' sx={props.buttonPopUp && { filter: 'blur(2px)' }} >
                <div>
                    <Avatar sx={{ width: '5rem', height: '5rem' }} src={props.pfp} />
                    {props.posts && <label htmlFor="profile-pic" className='bg-orange-100 rounded-full p-1 relative left-3 top-2 hover:bg-slate-50 active:bg-slate-700  font-sans font-semibold '>Upload</label>}
                    <input onChange={handlePfpUpload} className='hidden' accept='image/jpeg, image/png, image/jpg' type="file" name="pfp" id="profile-pic" />
                </div>
                <Link bgcolor={'beige'} padding={'7px'} borderRadius={'4px'} margin={'23px'} href={'mailto:mail@reese.com'} underline='none' noWrap color={'black'} sx={{
                    ':hover': {
                        color: 'brown',
                    },
                    ':active': {
                        color: 'white'
                    },
                    height: '1em',
                    minWidth: '7em'
                }} >{username}</Link>

                {props.posts &&
                    <div className='my-7 flex flex-row'>
                        {isAdmin && <Button className='h-[22px]'><a href={`${process.env.NEXT_PUBLIC_MANAGE_DB}`} target="_blank" rel="noopener noreferrer" className='whitespace-nowrap no-underline text-black font-bold'>Manage DB</a></Button>}
                        <Button className='h-[20px] w-[7rem] font-bold whitespace-nowrap mx-[10px] '>
                            <Link underline='none' color={'black'} href='/' >Log out</Link>
                        </Button>
                    </div>
                }
            </Box>
        </>
    )
}

export default Profile;