"use client";
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

export interface buttonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({title, handleClick,containerStyles=''} : buttonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={() => {}}
    >
        <span className="flex-1">Explore Cars</span>
    </button>
  )
}

export default Button