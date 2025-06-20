"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import UserMenu from './user-menu';

const Header = () => {
  return (
    <header className='container mx-auto '>
      <nav className='py-6 px-4 flex justify-between'>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="reflect"
            width={150}
            height={150}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className='flex item-center gap-4'>
          <Link href="/journal/write">
            <Button variant="mybut" type="button">
              <PenBox size={18} />
              <span className='hidden md:inline'>Write New</span>
            </Button>
          </Link>
          <SignedOut>
            <Link href="/sign-in" forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard#collections">
              <Button variant="outline" className='flex items-center gap-2'>
                <FolderOpen size={18} />
                <span className='hidden md:inline'>Collections</span>
              </Button>
            </Link>
            <UserMenu/>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
