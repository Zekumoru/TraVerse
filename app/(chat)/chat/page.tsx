import Logo from '@/app/components/Logo';
import { MdSettings } from 'react-icons/md';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Profile from '@/app/components/Profile';
import SignOutButton from '@/app/components/SignOutButton';

export default async function ChatPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const user = session.user!;

  return (
    <div className="grid min-h-screen">
      <div className="flex flex-col chat-preview-list">
        <header className="flex flex-col gap-4 p-5">
          <div className="flex gap-2 items-center">
            <Logo />
            <SignOutButton className="px-2 ml-auto h-full flex items-center" />
            <div className="h-full flex items-center">
              <MdSettings size={32} className="px-2 w-auto text-primary-600" />
            </div>
          </div>
          <div>
            <Profile user={user} />
          </div>
        </header>

        <div className="border-b-2" />

        <div className="flex-1 grid place-content-center">
          <p className="text-black-600">No chats yet!</p>
        </div>
      </div>
    </div>
  );
}
