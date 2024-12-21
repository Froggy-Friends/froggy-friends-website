"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full z-50 py-12">
      <div className="container mx-auto flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="Froggy Friends Logo"
          width={300}
          height={120}
          className="object-contain"
        />
      </div>
    </header>
  );
}
