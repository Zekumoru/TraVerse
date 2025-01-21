import { auth } from '@/auth';
import SignOutButton from '@/app/components/SignOutButton';
import Profile from '@/app/components/Profile';
import SignInPage from '@/app/pages/SignInPage';

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return <SignInPage />;
  }

  return (
    <div className="grid place-content-center min-h-screen p-4">
      <div className="flex flex-col gap-4">
        {session.user && <Profile user={session.user} />}
        <SignOutButton />
      </div>
    </div>
  );
}
