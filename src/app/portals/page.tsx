import Image from "next/image";

export default function Portals() {
  return (
    <div className="w-full h-screen bg-cover overflow-hidden flex justify-center items-center lg:items-start">
      <h1 className="text-white text-4xl text-center mb-24 lg:hidden">
        Portals are only available on desktop.
      </h1>
      <Image
        src="/froggy-peak.png"
        width={1600}
        height={900}
        alt="Froggy Peak"
        className="absolute z-10 top-0 left-0 w-full h-full object-cover animate-fadeIn"
      />
      <Image
        src="/portal-bg.png"
        width={1600}
        height={900}
        alt="Froggy Peak"
        className="absolute top-0 left-0 w-full h-full opacity-0 animation-delay-500 object-cover animate-fadeIn"
      />
      <Image
        width={446}
        height={448}
        src="/3d-portal.png"
        alt="3D Portal"
        className="animate-scaleFadeIn animation-delay-1000 opacity-0 z-20 absolute top-52 hidden lg:block xl:top-96 left-24 xl:left-32 w-[300px] xl:w-[446px]"
      />
      <Image
        width={491}
        height={678}
        src="/pixel-portal.png"
        alt="Pixel portal"
        className="animate-scaleFadeIn z-20 animation-delay-1100 opacity-0 absolute right-0 hidden lg:block top-48 xl:top-36 w-[325px] xl:w-[491px]"
      />
      <h1 className="text-white text-4xl text-center mt-24 z-30 animation-delay-1250 opacity-0 animate-fadeIn">
        Froggy Friends
      </h1>
      {/* TODO: Placeholder; abstract into control panel component */}
      <div className="flex flex-col opacity-0 h-10 gap-10 z-20 animate-fadeIn animation-delay-1350 bg-white w-3/4 absolute bottom-0"></div>
    </div>
  );
}
