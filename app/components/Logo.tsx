import Image from 'next/image';
import { sansitaOne } from '../fonts';

type LogoProps = {
  showImage?: boolean;
  className?: string;
};

export default function Logo({ className, showImage }: LogoProps) {
  return (
    <div className={`${className} flex gap-4 text-4xl`}>
      {showImage && (
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={40}
          className={`w-10 h-10 md:w-12 md:h-12`}
          unoptimized
        />
      )}
      <div className={`${sansitaOne.className}`}>
        <span className="text-primary-600">Tra</span>
        <span className="text-primary-950">Verse</span>
      </div>
    </div>
  );
}
