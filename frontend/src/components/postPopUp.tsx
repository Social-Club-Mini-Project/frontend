import React, { useEffect, useRef, useState } from 'react'
import { Inter } from '@next/font/google'
import TextField from '@mui/material/TextField'
import Button from './Button'
import Dialog from '@mui/material/Dialog'
import { propsPostPopUp } from '@/types/props'
import Image from 'next/image'

const PostPopUp = (props: propsPostPopUp) => {

    const [currTxt, setCurrTxt] = useState("");
    const [clicked, setClicked] = useState(false);
    const InputRef = useRef<HTMLInputElement>(null);
    const [img, setImg] = useState({ name: '', url: '' });

    const closePopUp = () => {
        if (props.buttonPopUp)
            props.setButtonPopUp(!props.buttonPopUp)

        if (clicked)
            setClicked(!clicked);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCurrTxt(e.target.value);
    }

    const handleKeyboardSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onCreate();
        }
    }

    const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files?.length > 0)
            setImg({ name: e.target.files[0].name.replace(/\.[^/.]+$/, ''), url: URL.createObjectURL(e.target.files[0]) })
        if (!img.url)
            e.target.value = '';
    }

    const handleImgRemove = () => {
        setImg({ name: '', url: '' });
    }

    const onCreate = () => {
        if (currTxt === '') {
            if (!clicked)
                setClicked(!clicked);
            // alert('The textfield is empty pls enter what you want to post!');
            handleFocus();
            return;
        }
        if (clicked)
            setClicked(!clicked);

        props.handleAddPost(currTxt, img.url, img.name);
        setCurrTxt("");
        setImg({ name: '', url: '' });
        props.setButtonPopUp(!props.buttonPopUp);
    }

    const handleFocus = () => {
        if (props.buttonPopUp)
            InputRef.current?.focus();
    }

    return (
        <>
            <Dialog open={props.buttonPopUp} onAnimationEnd={handleFocus} >
                <div className='w-52 min-[300px]:w-72 sm: post-popup-lg post-popup-xlg p-3 overflow-x-hidden' style={{ background: '#1B1A1A' }}>
                    <div className='w-52 min-[300px]:w-72 sm:w-full md:w-full '>
                        <Button className='p-4 min-[300px]:mx-[15.1rem] sm:mx-[30rem] md:mx-[90%] mx-[10rem] font-bold ' onClick={closePopUp}>X</Button>
                        <TextField inputRef={InputRef} id='post-text' name='postText' label='' value={currTxt} onChange={handleChange} onKeyDown={handleKeyboardSubmit} multiline={true} rows={16} sx={{ margin: '50px 0 0 18%', width: '80%', heigh: '100%', bgcolor: 'beige', borderRadius: '4px', }} placeholder='What are you thinking about?' ></TextField>
                        {img.url && <div className='p-4 flex min-[300px]:flex-col sm:flex-row'>
                            <Image className='rounded-md sm:mx-20 mx-9 md:mx-24' src={img.url} alt={img.name} width={200} height={250} />
                            <label className='text-white inline-block sm:-mx-16 mx-9 sm:py-24 py-5 sm:w-52' htmlFor="">{img.name}</label>
                        </div>}
                        <div className='flex p-1 sm:mx-60 mx-20'>
                            <input onChange={handleImgUpload} className='hidden' accept='image/jpg, image/png, image/jpeg, image/gif' type="file" name="img-upload" id="img-upload" />
                            <button className='p-1 bg-orange-100 rounded-lg hover:bg-slate-50 active:bg-slate-700'>
                                <label htmlFor="img-upload" className='font-sans text-base text-center inline whitespace-nowrap'>Upload Image</label>
                            </button>
                        </div>
                        {img.url && <div className='flex p-1 sm:mx-60 mx-20'>
                            <button onClick={handleImgRemove} className='p-0.5 bg-orange-100 rounded-lg hover:bg-slate-50 active:bg-slate-700'>
                                <label htmlFor="" className='font-sans text-base text-center inline whitespace-nowrap'>Remove Image</label>
                            </button>
                        </div>}
                        <Button className='p-4 w-20 text-center sm:mx-[16.5rem] mx-[6.5rem] my-[15px]' type='submit' onClick={onCreate}>Create</Button>
                        {clicked && <p className='text-red-500 text-center text-xl'>The textfield is empty pls enter what you want to post!</p>}
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default PostPopUp;