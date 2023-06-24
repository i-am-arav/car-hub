import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'> 
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link className='flex justify-center items-center' href={"/"}>
                <Image 
                    src="/logo.svg"
                    alt="Car Hub logo"
                    width={118}
                    height={118}
                    className="object-contain"
                />
            </Link>
            <Button
                title="Sign In"
            />
        </nav>
    </header>
  )
}

export default Navbar