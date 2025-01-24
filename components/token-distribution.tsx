"use client";

import { useEffect, useState } from "react";

export default function TokenDistribution() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-emerald-300 to-green-300">
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div className="flex flex-col items-center md:flex-row md:items-end gap-6 md:max-w-4xl w-full">
          <div className="flex flex-col justify-end w-full md:w-auto">
            <div className="mb-4 space-y-1">
              <div className="text-5xl font-bold text-white">55%</div>
              <div className="text-lg font-medium text-white">
                Liquidity Pool
              </div>
              <div className="text-sm text-white">550,000,000 coins</div>
              <div className="max-w-[200px] text-xs text-white/90">
                Locked liquidity ensures market stability
              </div>
            </div>
            <div className="h-[500px] w-full md:w-[200px] bg-gradient-to-t from-[#9999992e] to-white" />
          </div>

          <div className="flex flex-col justify-end w-full md:w-auto">
            <div className="mb-4 space-y-1">
              <div className="text-5xl font-bold text-white">25%</div>
              <div className="text-lg font-medium text-white">
                Ecosystem Utility
              </div>
              <div className="text-sm text-white">250,000,000 coins</div>
              <div className="max-w-[200px] text-xs text-white/90">
                Staking rewards, governance, and transaction
              </div>
            </div>
            <div className="h-[350px] w-full md:w-[200px] bg-gradient-to-t from-[#9999992e] to-white" />
          </div>

          <div className="flex flex-col justify-end w-full md:w-auto">
            <div className="mb-4 space-y-1">
              <div className="text-5xl font-bold text-white">15%</div>
              <div className="text-lg font-medium text-white">
                Team & Advisors
              </div>
              <div className="text-sm text-white">150,000,000 coins</div>
              <div className="max-w-[200px] text-xs text-white/90">
                Locked for 12-24 months with gradual vesting
              </div>
            </div>
            <div className="h-[180px] w-full md:w-[200px] bg-gradient-to-t from-[#9999992e] to-white" />
          </div>

          <div className="flex flex-col justify-end w-full md:w-auto">
            <div className="mb-4 space-y-1">
              <div className="text-5xl font-bold text-white">5%</div>
              <div className="text-lg font-medium text-white">
                Marketing & Partnerships
              </div>
              <div className="text-sm text-white">50,000,000 coins</div>
              <div className="max-w-[200px] text-xs text-white/90">
                Meme campaigns and strategic collaborations
              </div>
            </div>
            <div className="h-[100px] w-full md:w-[200px] bg-gradient-to-t from-[#9999992e] to-white" />
          </div>
        </div>

        <div className="relative w-[600px] h-[600px] md:ml-8 hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="total-supply-bg w-[450px] h-[450px] rounded-full bg-gradient-to-r from-white/30 to-transparent backdrop-blur-sm flex flex-col items-center justify-center">
              <div className="total-supply-bg-inner w-[350px] h-[350px] rounded-full bg-gradient-to-r backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full flex flex-col items-center justify-center text-white text-center">
                  <h1 className="font-bold font-[family-name:var(--font-pixelify-sans)] text-3xl tracking-[0.2em] mb-2">
                    TOTAL SUPPLY
                  </h1>
                  <p className="text-4xl tracking-wider font-bold font-[family-name:var(--font-pixelify-sans)]">
                    1 BILLION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
