import { signIn } from '@/auth';
import Image from 'next/image';

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server';

        await signIn('google');
      }}
    >
      <button className="p-4 rounded-full shadow-md text-2xl flex gap-4 w-full max-w-[575px] mx-auto hover:bg-neutral-100 active:bg-neutral-200 transition">
        <Image src="/assets/google-icon.svg" alt="" width={32} height={32} />
        <span className="flex-1">Sign in with Google</span>
      </button>
    </form>
  );
}
