import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';

        await signOut();
      }}
    >
      <button className="px-8 py-2 rounded-md text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
        Log out
      </button>
    </form>
  );
}
