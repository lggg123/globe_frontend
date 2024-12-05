import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-400 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-yellow-300 mb-4">Stay lifted!</p>
          
          <h1 className="text-6xl font-bold mb-6">
            Double
            <br />
            Blunts
          </h1>
          
          <p className="text-lg opacity-90 mb-8 max-w-xl">
          $BLUNTS isn't just another memecoin - it's your ticket to the moon and beyond. Double up on gains while staying perpetually lifted. Join the most blazing community in crypto!"
"Get double the lift with $BLUNTS - the first memecoin that keeps you high on profits and good vibes. Two blunts are better than one. Ready to ascend?"
"$BLUNTS: Where gains meet good times. Double your pleasure with the most uplifting memecoin in the game. When we say 'to the moon' we mean it. Stay lifted!
          </p>
          
          <a 
            href="https://pump.fun/coin/4DsQK2acTxFnk1DiGzdAzKrUDThGGTjybje1h3iapump"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Buy $BLUNTS Now!
          </a>
        </div>

        {/* Right section - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
                src="/dub_blunts.png"
                alt="Double Blunts"
                fill
                className="object-cover"
                priority
              />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-32 text-center">
        <h2 className="text-5xl font-bold">
          Unleash Your Potential
        </h2>
      </div>
    </div>  
  );
}
