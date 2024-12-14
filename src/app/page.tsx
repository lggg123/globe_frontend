import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap" rel="stylesheet" />
      </head>
    
      <div className="min-h-screen relative bg-[#5D3891] text-white p-8">
        <div className="absolute inset-0"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left section with extended gradient container */}
          <div className="relative lg:w-1/2 mb-8 lg:mb-0">
            {/* Extended gradient container that goes beyond the image */}
            <div className="absolute -inset-24 -right-96 -bottom-48 -z-10">
              {/* Main image container */}
              <div className="absolute inset-24 right-96 bottom-48">
                <Image
                  src="/globe_background.jpg"
                  alt="Behind Text"
                  fill
                  className="object-cover object-center opacity-60"
                />
              </div>
              {/* Extended gradients with focus on bottom and right edges */}
              <div className="absolute inset-0 bg-[#5D3891]/70"></div>
              {/* Corner gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#5D3891]/70 to-[#5D3891]/70"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-[#5D3891]/70 via-transparent to-[#5D3891]/70"></div>
              {/* Extra bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#5D3891] to-transparent"></div>
              {/* Extra right fade */}
              <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-[#5D3891] to-transparent"></div>
            </div>
            
            <p className="text-yellow-300 text-xl font-medium mb-4 tracking-wider">
              Globe Town
            </p>
            <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              GLOBE
              <br />
              TOWN
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-xl leading-relaxed">
              Welcome to Globe Town. $GLOBE isn&apos;t just another memecoin - it&apos;s your ticket to the moon
              and beyond. It&apos;s a cultural revolution. Built by solid believers and dreamers, our
              mission is to rewrite the story of the memecoin space—a space plagued by fleeting rugs
              and empty promises.
              <br />
              Globe Town stands as a movement of unity, resilience, and meaningful impact. Together,
              we're creating a community that values trust, transparency, and transformative change.
              Join the town, make a difference, and let&apos;s build a legacy together! 🌍
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
        <div className="mt-32 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-4">Unleash Your Potential</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Dive into the transformative power of Globe Town, where innovation meets determination.
            Together, we redefine possibilities and build a brighter future.
          </p>
        </div>
        {/* Footer section */}
        <footer className="mt-16 border-t border-purple-400/50 pt-8 text-center relative z-10">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Globe Town. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}