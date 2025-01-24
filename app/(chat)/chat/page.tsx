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
    <div className="grid grid-cols-1 min-h-screen md:grid-cols-[380px_auto]">
      <div className="chat-preview-list flex flex-col md:border-r-2">
        <header className="flex flex-col gap-4 p-5">
          <div className="flex gap-2 items-center">
            <Logo />
            <SignOutButton className="px-2 ml-auto h-full flex items-center" />
            <div className="h-full flex items-center">
              <MdSettings size={32} className="px-2 w-auto text-black-200" />
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

      <div className="chat-interface place-content-center hidden md:grid">
        <p className="text-black-600">No chat is opened.</p>
      </div>
    </div>
  );
}
