import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import SignOutButton from '@/app/components/SignOutButton';
import Profile from '@/app/components/Profile';

export default async function ChatPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <div className="grid place-content-center min-h-screen p-4">
      <div className="flex flex-col gap-4">
        <div>
          Under construction... <br />
          Here&apos;s your account instead.
        </div>

        {session.user && <Profile user={session.user} />}

        <SignOutButton />
      </div>
    </div>
  );
}
