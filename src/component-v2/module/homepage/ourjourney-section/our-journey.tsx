'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { phaseData } from '@/constants'

const OurJourney = () => {
  // State to manage the selected phase
  const [selectedPhase, setSelectedPhase] = useState('Phase 1')

  // Array of phase titles to map over
  const phases = Object.keys(phaseData)

  return (
    <section className="h-full w-full px-20 py-16">
      <motion.div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-5 px-5 md:px-10 lg:px-24">
        <h1 className="mr-4 text-start font-manrope text-4xl font-semibold text-secondPrimary">
          Our Journey
        </h1>

        {/* Grid for the 5 phases */}
        <motion.div
          className="flex justify-start gap-2 font-manrope text-xl font-semibold transition-colors duration-300"
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
              onClick={() => setSelectedPhase(phase)} // Update selected phase on click
              className={`border-white-100 flex flex-col items-center justify-center bg-white font-manrope text-green-700 transition-colors duration-300 hover:bg-secondPrimary hover:text-white focus:font-extrabold focus:text-white active:bg-secondPrimary sm:text-base md:text-2xl lg:text-2xl xl:text-2xl ${
                selectedPhase === phase
                  ? 'bg-secondPrimary text-left font-manrope text-[22px] leading-[30.05px]'
                  : ''
              }`}
              style={{ width: '173px', height: '69px' }} // Adjusted height
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              whileTap={{ scale: 1 }} // Slight scale effect on click
            >
              <h1 className="font-manrope text-2xl text-[22px] font-light hover:font-semibold hover:text-white">
                {phase}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Boxes below the grid */}
        <div className="flex-col-2 flex items-center gap-10">
          {/* First Box */}
          <motion.div
            className="justify-start self-start p-4 font-manrope text-sm font-light transition-colors duration-300 ease-in-out sm:text-base md:text-2xl lg:text-2xl xl:text-2xl"
            style={{ width: '325px', height: '450px' }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            <p>{phaseData[selectedPhase].box1}</p>{' '}
            {/* Display content for box 1 */}
          </motion.div>

          {/* Second Box */}
          <motion.div
            className="p-4 font-manrope text-sm font-light transition-colors duration-300 ease-in-out sm:text-base md:text-2xl lg:text-2xl xl:text-2xl"
            style={{ width: '751px', height: '450px' }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            <p>{phaseData[selectedPhase].box2}</p>{' '}
            {/* Display content for box 2 */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default OurJourney
