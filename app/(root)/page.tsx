import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Logo from '@/app/components/Logo';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect('/chat');
  }

  return (
    <div className="grid content-center min-h-screen p-4 gap-6 md:gap-4 text-5xl text-center leading-[72px]">
      <div className="mx-auto">
        <Logo showImage />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        Conversations
        <br /> made universal.
      </div>
      <div className="font-bold block md:hidden">
        Just for <span className="text-primary-600">you</span>.
      </div>
      {/* End Mobile */}

      {/* Desktop */}
      <div className="hidden md:block mt-8">
        Conversations made universal,{' '}
        <span className="font-bold">
          just for <span className="text-primary-600">you</span>.
        </span>
      </div>
      <div className="hidden md:block text-xl">
        Sign in with Google to get started traversing language barriers.
      </div>
      {/* End Desktop */}

      <GoogleSignInButton />

      <div className="absolute bottom-0 left-0 right-0 text-base p-4">
        © Zekumoru 2025
      </div>
    </div>
  );
}
