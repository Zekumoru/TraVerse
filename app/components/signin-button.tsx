import { signIn } from '@/auth';

export default function SignInButton() {
  return (
    <form
      action={async () => {
        'use server';

        await signIn('google');
      }}
    >
      <button className="px-4 py-2 rounded bg-neutral-600">
        Sign-In With Google
      </button>
    </form>
  );
}
