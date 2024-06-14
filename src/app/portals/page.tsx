import Image from "next/image";

export default function Portals() {
  return (
    <div className="w-full h-screen bg-[url('/portal-bg.png')] bg-cover bg-center overflow-hidden flex justify-center items-center">
      <Image
        width={446}
        height={448}
        src="/3d-portal.png"
        alt="3D Portal"
        className="animate-scaleFadeIn absolute top-52 hidden lg:block xl:top-96 left-24 xl:left-32 w-[300px] xl:w-[446px]"
      />
      <h1 className="text-white text-4xl text-center mb-24 lg:hidden">
        Portals are only available on desktop.
      </h1>
      <Image
        width={491}
        height={678}
        src="/pixel-portal.png"
        alt="Pixel portal"
        className="animate-scaleFadeIn absolute right-0 hidden lg:block top-48 xl:top-36 w-[325px] xl:w-[491px]"
      />
    </div>
  );
}
