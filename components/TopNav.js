'use client';

import React from 'react';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(router);
  return (
    <header className="flex space-x-3 px-3 ">
      <Link href="/" legacyBehavior>
        <span
          className={` ${
            pathname === '/' ? ' border-b-2 border-black' : ''
          }      flex cursor-pointer items-center p-3 space-x-2`}
        >
          <AiOutlineHome />
          <span>Home</span>
        </span>
      </Link>
      <Link href="/login" legacyBehavior>
        <span
          className={` ${
            pathname === '/login' ? ' border-b-2 border-black' : ''
          }      flex cursor-pointer items-center p-3 space-x-2`}
        >
          <AiOutlineLogin />
          <span>Login</span>
        </span>
      </Link>
      <Link href="/register" legacyBehavior>
        <span
          className={` ${
            pathname === '/register' ? ' border-b-2 border-black' : ''
          }      flex cursor-pointer items-center p-3 space-x-2`}
        >
          <BsFillPersonPlusFill />

          <span>Register</span>
        </span>
      </Link>
    </header>
  );
};

export default TopNav;
