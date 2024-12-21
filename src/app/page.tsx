import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";

const projects = [
  {
    title: "Meme Pools",
    image: "/memepools.jpg",
    url: "https://memepools.com",
  },
  {
    title: "Portals",
    image: "/portals.png",
    url: "https://portals.froggyfriends.io",
  },
  {
    title: "PFP Generator",
    image: "/build.png",
    url: "https://build.froggyfriends.io",
  },
  {
    title: "Discord",
    image: "/discord.png",
    url: "https://discord.gg/BfPr9njdut",
  },
  {
    title: "Froggy Friends on Opensea",
    image: "/opensea.png",
    url: "https://opensea.io/collection/froggyfriendsnft",
  },
  {
    title: "Tadpoles on Opensea",
    image: "/tadpole.png",
    url: "https://opensea.io/collection/tadpolesnft",
  },
  {
    title: "Instagram",
    image: "/instagram.png",
    url: "https://www.instagram.com/froggyfriends.co",
  },
  {
    title: "Froggy Friends on X",
    image: "/froggy.png",
    url: "https://x.com/FroggyFriendsCo",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Link
                href={project.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
