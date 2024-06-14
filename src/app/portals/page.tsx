import Image from "next/image";

export default function Portals() {
  return (
    <div className="w-full h-screen bg-[url('/portal-bg.png')] bg-cover bg-center overflow-hidden">
      <Image
        width={446}
        height={448}
        src="/3d-portal.png"
        alt="3D Portal"
        className="animate-scaleFadeIn absolute top-96 left-32"
      />
      <Image
        width={491}
        height={678}
        src="/pixel-portal.png"
        alt="Pixel portal"
        className="animate-scaleFadeIn absolute right-0 top-36"
      />
    </div>
  );
}
