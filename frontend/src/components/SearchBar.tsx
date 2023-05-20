import React, { useEffect, useState } from 'react'
import Button from './Button';
import { PostsProps } from '@/types/props';

export const SearchBar = (props: PostsProps) => {
    const [searchVal, setSearchVal] = useState("")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchVal(e.target.value);
    }

    const handleKeyboardInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            e.preventDefault();
        if (e.key === 'Backspace')
            setSearchVal("0")
    }

    const handleResetSearch = () => {
        setSearchVal("0");
    }

    useEffect(() => {
        if (searchVal === "0")
            setSearchVal("");
        props.searchPost.searchForPost(parseInt(searchVal));
    }, [props.searchPost, searchVal, setSearchVal])

    return (
        <>
            <div className='flex flex-row relative right-28 top-36'>
                <label htmlFor="" className='text-2xl relative bottom-2'>🔍</label>
                <input type="number" name="search" value={searchVal} onChange={handleSearch} onKeyDown={handleKeyboardInput} id="" min={0} className='w-52 h-4 resize-none relative left-2 bottom-1' />
                {<Button onClick={handleResetSearch} className='h-5 relative left-4 bottom-1 font-bold'>Reset</Button>}
            </div>
        </>
    )
}