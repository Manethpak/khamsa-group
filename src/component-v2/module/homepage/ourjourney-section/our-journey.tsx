'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { phaseData } from '@/constants'
import { Motion } from '@/component-v2/ui/motion'

type PhaseKeys = keyof typeof phaseData

const OurJourney = () => {
  const [selectedPhase, setSelectedPhase] = useState<PhaseKeys>('Phase 1')
  const phases = Object.keys(phaseData) as PhaseKeys[]

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-10 px-5 md:px-10 lg:px-24">
        <Motion delay={0.5} className="heading-subtitle">
          OUR JOURNEY
        </Motion>

        {/* Grid for the 5 phases */}
        <Motion
          delay={0.75}
          className="flex justify-start gap-2 font-manrope text-lg font-semibold transition-colors duration-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl"
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhase(phase)}
              className={`flex flex-col items-center justify-center transition-colors duration-300 ${
                selectedPhase === phase
                  ? 'title bg-secondPrimary font-bold text-white'
                  : 'title bg-white'
              }`}
              style={{
                width: '173px',
                height: '69px',
                border: 'white',
              }}
            >
              <h1 className="font-manrope text-xs sm:text-sm lg:text-base">
                {phase}
              </h1>
            </div>
          ))}
        </Motion>

        {/* Boxes below the grid */}
        <div className="flex flex-col gap-x-24 gap-y-10 sm:flex-row">
          {/* First Box */}
          <Motion delay={0.75} className="title w-52">
            {phaseData[selectedPhase] ? (
              <p>{phaseData[selectedPhase].box1}</p>
            ) : (
              <p>Loading...</p>
            )}
          </Motion>

          {/* Second Box */}
          <Motion className="subtitle pr w-full max-w-4xl p-4">
            {phaseData[selectedPhase] ? (
              <p>{phaseData[selectedPhase].box2}</p>
            ) : (
              <p>Loading...</p>
            )}
          </Motion>
        </div>
      </div>
    </section>
  )
}

export default OurJourney
