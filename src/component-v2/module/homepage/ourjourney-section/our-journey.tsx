'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { phaseData } from '@/constants'

type PhaseKeys = keyof typeof phaseData

const OurJourney = () => {
  const [selectedPhase, setSelectedPhase] = useState<PhaseKeys>('Phase 1')
  const phases = Object.keys(phaseData) as PhaseKeys[]

  return (
    <section className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-5 md:px-10 lg:px-24">
      <motion.div className="flex w-full max-w-screen-2xl flex-col gap-10">
        <h1 className="text-start font-manrope text-2xl font-semibold text-secondPrimary sm:text-3xl md:text-4xl">
          OUR JOURNEY
        </h1>

        {/* Grid for the 5 phases */}
        <motion.div
          className="flex justify-start gap-2 font-manrope text-lg font-semibold transition-colors duration-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedPhase(phase)}
              className={`flex flex-col items-center justify-center transition-colors duration-300 sm:text-base md:text-xl lg:text-2xl ${
                selectedPhase === phase
                  ? 'bg-secondPrimary font-bold text-white'
                  : 'bg-white font-normal text-secondPrimary'
              }`}
              style={{
                width: '173px',
                height: '69px',
                border: 'white',
              }}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              whileTap={{ scale: 1 }}
            >
              <h1 className="font-manrope text-2xl text-[22px]">{phase}</h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Boxes below the grid */}
        <div className="flex-col-2 flex flex-wrap justify-start gap-6 md:gap-10">
          {/* First Box */}
          <motion.div
            className="p-4 font-manrope text-sm font-light transition-colors duration-300 ease-in-out sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            style={{ width: '100%', maxWidth: '325px', height: 'auto' }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            {phaseData[selectedPhase] ? (
              <p>{phaseData[selectedPhase].box1}</p>
            ) : (
              <p>Loading...</p>
            )}
          </motion.div>

          {/* Second Box */}
          <motion.div
            className="p-4 font-manrope text-sm font-light transition-colors duration-300 ease-in-out sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            style={{ width: '100%', maxWidth: '751px', height: 'auto' }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            {phaseData[selectedPhase] ? (
              <p>{phaseData[selectedPhase].box2}</p>
            ) : (
              <p>Loading...</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default OurJourney
