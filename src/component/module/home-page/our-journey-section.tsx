'use client'

import React, { useState } from 'react'
import { JOURNEY_DATA } from '@/constants/journey'
import { Motion } from '@/component/ui/motion'
import { cn } from '@/lib/utils'

type PhaseKeys = keyof typeof JOURNEY_DATA

const OurJourneySection = () => {
  const [selectedPhase, setSelectedPhase] = useState<PhaseKeys>('2021')
  const phases = Object.keys(JOURNEY_DATA) as PhaseKeys[]

  return (
    <section
      id="journey"
      className="flex w-full flex-col items-center justify-center pt-10"
    >
      <div className="flex w-full max-w-screen-2xl flex-col gap-10 px-5 md:px-10 lg:px-24">
        <Motion delay={0.5} className="heading-subtitle uppercase">
          Our Journey
        </Motion>

        {/* Grid for the 5 phases */}
        <Motion
          delay={0.75}
          className="flex cursor-pointer justify-start gap-1 transition-colors duration-300"
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhase(phase)}
              className={cn(
                'title flex h-16 w-40 flex-col items-center justify-center border-white px-2 font-light transition-colors duration-300',
                selectedPhase === phase
                  ? 'bg-secondPrimary font-medium text-white'
                  : 'bg-white'
              )}
            >
              <h1 className="text-base sm:text-xl md:text-2xl">{phase}</h1>
            </div>
          ))}
        </Motion>

        {/* Boxes below the grid */}
        <div className="flex flex-col gap-x-24 gap-y-10 sm:mt-14 sm:flex-row">
          {/* First Box */}
          <Motion delay={0.75} className="title w-full text-2xl font-medium">
            <p>{JOURNEY_DATA[selectedPhase].title}</p>
          </Motion>

          {/* Second Box */}
          <Motion delay={0.8} className="subtitle w-full max-w-4xl">
            <Motion delay={0.8}>
              {JOURNEY_DATA[selectedPhase].description}
            </Motion>
          </Motion>
        </div>
      </div>
    </section>
  )
}

export default OurJourneySection
