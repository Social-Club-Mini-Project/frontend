import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useTheme = () => {
    const [pageTheme, setPageTheme] = useState('login-page');
    const router = useRouter();

    const switchTheme = useCallback(() => {
        if (router.pathname === '/app') {
            setPageTheme('app-page')
        }
        else {
            setPageTheme('login-page')
        }

    }, [setPageTheme, router])

    useEffect(() => {
        // switchTheme();
    }, [switchTheme])

    return pageTheme;
}

export default useTheme