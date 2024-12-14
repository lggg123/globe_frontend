import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#5D3891] text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left section - a single container for both image & gradient */}
        <div className="relative lg:w-1/2 mb-8 lg:mb-0 z-10">
          {/* Combined background image + gradient overlay */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/globe_background.jpg"
              alt="Behind Text"
              fill
              className="object-cover object-center opacity-70"
            />
            {/* Edge gradients to hide corners */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5D3891] via-[#5D3891]/60 to-[#5D3891]/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5D3891] via-[#5D3891]/50 to-[#5D3891]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5D3891] via-transparent to-[#5D3891]"></div>
            {/* Additional corner coverage */}
            <div className="absolute inset-0 bg-[#5D3891]/40"></div>
          </div>
          <p className="text-yellow-300 text-xl font-medium mb-4 tracking-wider">
            Globe Town
          </p>
          <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            GLOBE
            <br />
            TOWN
          </h1>
          <p className="text-lg opacity-90 mb-8 max-w-xl leading-relaxed">
            Welcome to Globe Town. $GLOBE isn't just another memecoin - it's your ticket to the moon
            and beyond. It's a cultural revolution. Built by solid believers and dreamers, our
            mission is to rewrite the story of the memecoin space—a space plagued by fleeting rugs
            and empty promises.
            <br />
            Globe Town stands as a movement of unity, resilience, and meaningful impact. Together,
            we're creating a community that values trust, transparency, and transformative change.
            Join the town, make a difference, and let's build a legacy together! 🌍
          </p>
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Buy $GLOBE Now!
          </a>
        </div>
        {/* Right section - Video */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/globe_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            ></video>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="mt-32 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Unleash Your Potential</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          Dive into the transformative power of Globe Town, where innovation meets determination.
          Together, we redefine possibilities and build a brighter future.
        </p>
      </div>
      {/* Footer section */}
      <footer className="mt-16 border-t border-purple-400 pt-8 text-center">
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} Globe Town. All rights reserved.
        </p>
      </footer>
    </div>
  );
}