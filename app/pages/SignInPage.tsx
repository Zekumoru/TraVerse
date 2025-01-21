import React from 'react';
import Logo from '@/app/components/Logo';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';

export default function SignInPage() {
  return (
    <div className="grid content-center min-h-screen p-4 gap-6 text-5xl text-center leading-[72px]">
      <Logo />

      {/* Mobile */}
      <div>
        Conversations
        <br /> made universal.
      </div>
      <div className="font-bold">
        Just for <span className="text-primary-600">you</span>.
      </div>
      {/* End Mobile */}

      <GoogleSignInButton />

      <div className="absolute bottom-0 left-0 right-0 text-base p-4">
        © Zekumoru 2025
      </div>
    </div>
  );
}
