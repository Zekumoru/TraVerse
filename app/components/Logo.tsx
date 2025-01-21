import Image from 'next/image';
import { sansitaOne } from '../layout';

export default function Logo() {
  const logoSize = 40;

  return (
    <div className="flex gap-5 text-[40px] justify-center">
      <Image
        src="/logo.png"
        alt=""
        width={logoSize}
        height={logoSize}
        className={`w-[${logoSize}px] h-[${logoSize}px]`}
        unoptimized
      />
      <div className={`${sansitaOne.className} text-4xl`}>
        <span className="text-primary-600">Tra</span>
        <span className="text-primary-950">Verse</span>
      </div>
    </div>
  );
}
