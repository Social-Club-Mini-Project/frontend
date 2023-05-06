import useTheme from '@/hooks/useTheme';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'

const Layout = ({ children }: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLElement>, HTMLElement>) => {
    const pageTheme = useTheme()
    
    return (
        <div className={`${pageTheme}`}>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;