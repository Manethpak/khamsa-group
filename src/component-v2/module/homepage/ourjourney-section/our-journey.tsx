'use client'

import React from 'react'
import { motion } from 'framer-motion'

const OurJourney = () => {
  const phases = [
    { title: 'Phase 1' },
    { title: 'Phase 2' },
    { title: 'Phase 3' },
    { title: 'Phase 4' },
    { title: 'Phase 5' },
  ]

  return (
    <section className="h-full w-full px-16 py-16">
      <motion.div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-5 px-5 md:px-10 lg:px-24">
        <h1 className="mr-4 text-start font-manrope text-4xl font-semibold text-secondPrimary">
          Our Journey
        </h1>

        {/* Grid for the 5 boxes with no gap */}
        <motion.div
          className="flex justify-start gap-2 font-manrope text-sm font-light transition-colors duration-300 sm:text-base md:text-2xl lg:text-2xl xl:text-2xl"
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
              className="border-white-100 flex flex-col items-center justify-center bg-white font-manrope text-green-700 transition-colors duration-300 ease-in-out focus:font-semibold focus:bg-secondPrimary focus:text-white active:bg-secondPrimary"
              style={{ width: '173px', height: '69px', opacity: 0 }} // Adjusted height
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              whileTap={{ scale: 0.95 }} // Slight scale effect on click
            >
              <h1 className="font-manrope text-[22px] text-xl font-light">
                {phase.title}
              </h1>
            </motion.div>
          ))}
        </motion.div>

        {/* Boxes below the grid */}
        <div className="flex-col-2 flex items-center gap-10">
          {/* First Box */}
          <motion.div
            className="justify-start self-start p-1 font-manrope text-sm font-light transition-colors duration-300 ease-in-out sm:text-base md:text-2xl lg:text-2xl xl:text-2xl"
            style={{ width: '325px', height: '450px', opacity: 0 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            <p>Leisure and F&B</p>
          </motion.div>

          {/* Second Box */}
          <motion.div
            className="p-1 font-manrope text-sm font-light transition-colors duration-300 ease-in-out sm:text-base md:text-2xl lg:text-2xl xl:text-2xl"
            style={{ width: '751px', height: '450px', opacity: 0 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            <p>
              Pirate ipsum arrgh bounty warp jack. Halter road no red pirate
              brethren a gabion plate. Tea splice or gangplank landlubber blow
              just spyglass. Rig seas overhaul run six arrgh avast splice crimp
              coffer. Sails cog sloop chandler pounders or. Yellow pirate to
              tails tails. Black yer blimey log dead bow gaff on privateer
              crow's. Jib reef man bow privateer landlubber down blossom me
              driver. Plate ketch blossom overhaul topsail shrouds shrouds yawl
              just jennys. The men davy black men six chantey roger bounty
              crow's. Jennys arr ipsum tails pink yawl. Gaff tell davy lanyard
              yawl gar fathom scurvy. Across her tell me crow's sails her
              gunwalls chandler halter. Nipper coxswain gangplank swab jennys
              bow warp guns. Prey.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default OurJourney
