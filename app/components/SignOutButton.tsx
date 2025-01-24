import { signOut } from '@/auth';
import { MdLogout } from 'react-icons/md';

type SignOutButtonProps = {
  className?: string;
};

export default function SignOutButton({ className }: SignOutButtonProps) {
  return (
    <form
      className={className}
      action={async () => {
        'use server';

        await signOut();
      }}
    >
      <button>
        <MdLogout size={32} className="text-primary-600 ml-auto" />
      </button>
    </form>
  );
}
