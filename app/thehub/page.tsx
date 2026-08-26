"use client"

import { useState } from "react"

export default function LockedForensicScanner() {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (en) => setImageSrc(en.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 p-8 flex flex-col items-center font-mono">
      <h1 className="text-xl font-black mb-8 tracking-widest text-blue-500">
        VALIDATOR_V2: LOCKED_SETTINGS
      </h1>

      <div className="mb-10 flex flex-col sm:flex-row gap-6 items-center bg-zinc-900/30 p-6 rounded-lg border border-zinc-800">
        <input
          type="file"
          onChange={handleUpload}
          aria-label="Upload image for analysis"
          className="text-xs file:bg-zinc-800 file:border-0 file:rounded file:text-white file:px-4 file:py-2 cursor-pointer hover:file:bg-zinc-700"
        />
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          aria-pressed={isRevealed}
          className={`px-10 py-2 rounded font-black transition-all duration-200 border-2 ${
            isRevealed
            ? "bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500/10"
          }`}
        >
          {isRevealed ? "Uncheck" : "Check"}
        </button>
      </div>

      {imageSrc && (
        <div className="relative rounded-sm shadow-2xl overflow-hidden border border-zinc-800 bg-black max-w-2xl">
          <img 
            src={imageSrc} 
            alt="Analysis"
            className="w-full h-auto"
            style={{
              // These are the hardcoded "33% Sweet Spot" values
              filter: isRevealed 
                ? "brightness(17.5) contrast(1.66) saturate(4.3)" 
                : "none",
              imageRendering: "pixelated"
            }}
          />
        
        </div>
      )}

      <div className="mt-8 flex gap-4 opacity-20 text-[9px] uppercase tracking-[0.2em]">
        <span>Filter: Optimized_v2</span>
        <span>|</span>
        <span>Target: Top_Right_Score</span>
      </div>
    </div>
  )
}