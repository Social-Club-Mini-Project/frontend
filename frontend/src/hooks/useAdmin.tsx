import React, { useCallback, useEffect, useState } from 'react'

const useAdmin = () => {
    const [isAdmin,setIsAdmin] = useState(false)
    
    const handleAdminCheck = useCallback(() => {
        const usertype = window.localStorage.getItem('usertype');
        switch (usertype) {
            case 'true':
                setIsAdmin(true);
                break;
            case 'false':
                setIsAdmin(false);
            default:
                break;
        }
    }, [setIsAdmin])

    useEffect(() => {
        handleAdminCheck();
    },[handleAdminCheck])
    
    return isAdmin;
}

export default useAdmin