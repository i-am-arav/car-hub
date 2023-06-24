"use client";
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

export interface buttonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit" 
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({title, handleClick,btnType, containerStyles=''} : buttonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className="flex-1">{title}</span>
    </button>
  )
}

export default Button