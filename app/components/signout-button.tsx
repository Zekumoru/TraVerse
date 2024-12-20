import { signOut } from '@/auth';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';

        await signOut();
      }}
    >
      <button className="px-4 py-2 rounded bg-neutral-600">Log out</button>
    </form>
  );
}
