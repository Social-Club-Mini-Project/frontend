import React from 'react'

const Button = ({ children, className, onClick, onChange, onSubmit, type }: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement> & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <>
            <button type={type} onClick={onClick} onChange={onChange} onSubmit={onSubmit} className={`rounded-md border-none bg-orange-100 hover:bg-white transition-[background-color] active:duration-700 active:bg-slate-700 ${className}`}>
                {children}
            </button>
        </>
    )
}

export default Button;