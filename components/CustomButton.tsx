'use client';
import React, {MouseEventHandler} from "react";
import {twMerge} from "tailwind-merge";

interface CustomButtonProps {
    title: string
    className?: string
    type?: 'submit' | 'button' | 'reset'
    handClick?: MouseEventHandler<HTMLButtonElement>
}
const CustomButton: React.FC<CustomButtonProps> = ({title, className, handClick, type}) => {
    return (
        <button className={twMerge(`custom-btn`, className)} disabled={false} type={type || 'button'} onClick={handClick}>
            <span className='flex-1'>{title}</span>
        </button>
    )
}

export default CustomButton;