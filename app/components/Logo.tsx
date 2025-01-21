import Image from 'next/image';
import { sansitaOne } from '../layout';

export default function Logo() {
  return (
    <div className="flex gap-4 text-4xl justify-center md:text-5xl">
      <Image
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        className={`w-10 h-10 md:w-12 md:h-12`}
        unoptimized
      />
      <div className={`${sansitaOne.className}`}>
        <span className="text-primary-600">Tra</span>
        <span className="text-primary-950">Verse</span>
      </div>
    </div>
  );
}
