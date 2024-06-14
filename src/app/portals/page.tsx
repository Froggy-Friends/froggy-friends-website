export default function Portals() {
  return (
    <div className="w-full h-screen bg-[url('/portal-bg.png')] bg-cover bg-center overflow-hidden">
      <img
        src="/3d-portal.png"
        className="animate-scaleFadeIn absolute top-96 left-32"
      />
      <img
        src="/pixel-portal.png"
        className="animate-scaleFadeIn absolute right-0 top-36"
      />
    </div>
  );
}
