import { User } from 'next-auth';
import Image from 'next/image';

export default function Profile({ user }: { user: User }) {
  return (
    <div className="flex gap-4 items-center">
      {user.image && (
        <Image
          src={user.image}
          alt="Google profile picture"
          width={48}
          height={48}
          className="rounded-full"
        />
      )}
      <span>{user.name}</span>
    </div>
  );
}