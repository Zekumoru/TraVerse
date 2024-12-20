import { auth } from '@/auth';
import SignOutButton from '@/app/components/signout-button';
import SignInButton from '@/app/components/signin-button';
import Profile from '@/app/components/profile';

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid place-content-center min-h-screen p-4">
      <div className="flex flex-col gap-4">
        {!session?.user ? (
          <>
            <div className="text-2xl">Log in or create a new account!</div>
            <SignInButton />
          </>
        ) : (
          <>
            {session.user && <Profile user={session.user} />}
            <SignOutButton />
          </>
        )}
      </div>
    </div>
  );
}
