'use client'

import React, { useState } from 'react'
import { JOURNEY_DATA } from '@/constants/journey'
import { Motion } from '@/component/ui/motion'
import { cn } from '@/lib/utils'
import { Schema } from '@/lib/schema'
import { it } from 'node:test'

type Props = { data: Schema['Journey'] }

const OurJourneySection = ({ data }: Props) => {
  const journey = data
  const [selectedPhase, setSelectedPhase] = useState('2021')
  const phases = Object.keys(JOURNEY_DATA) as []

  return (
    <section
      id="journey"
      className="flex w-full flex-col items-center justify-center"
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
          {journey.map((items, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhase(items.phase as string)}
              className={cn(
                'title flex h-16 w-40 flex-col items-center justify-center border-white px-2 font-light transition-colors duration-300',
                selectedPhase === items.phase
                  ? 'bg-secondPrimary font-medium text-white'
                  : 'bg-white'
              )}
            >
              <h1 className="text-base sm:text-xl md:text-2xl">
                {items.phase}
              </h1>
            </div>
          ))}
        </Motion>

        {/* Boxes below the grid */}
        <div className="flex flex-col gap-x-24 gap-y-10 sm:mt-14 sm:flex-row">
          {/* First Box */}
          <Motion delay={0.75} className="title w-full text-2xl font-medium">
            {/* <p>{JOURNEY_DATA[selectedPhase].title}</p> */}
            <div>
              {journey.map((items, index) => {
                if (items.phase === selectedPhase) {
                  return <p key={index}>{items.title}</p>
                }
              })}
            </div>
            {/* <p>{items.title}</p> */}
          </Motion>

          {/* Second Box */}
          <Motion delay={0.8} className="subtitle w-full max-w-4xl">
            <Motion delay={0.8}>
              {journey.map((items, index) => {
                if (items.phase === selectedPhase) {
                  return <p key={index}>{items.subtitle}</p>
                }
              })}
            </Motion>
          </Motion>
        </div>
      </div>
    </section>
  )
}

export default OurJourneySection

// 'use client'

// import React, { useState } from 'react'
// import { JOURNEY_DATA } from '@/constants/journey'
// import { Motion } from '@/component/ui/motion'
// import { cn } from '@/lib/utils'
// import { Schema } from '@/lib/schema'
// type Props = { data: Schema['Journey'] }

// const OurJourneySection = ({ data }: Props) => {
//   const journey = data
//   console.log(data)
//   return (
//     <section
//       id="journey"
//       className="flex w-full flex-col items-center justify-center"
//     >
//       <div className="flex w-full max-w-screen-2xl flex-col gap-10 px-5 md:px-10 lg:px-24">
//         <Motion delay={0.5} className="heading-subtitle uppercase">
//           Our Journey
//         </Motion>

//         {/* Grid for the 5 phases */}
//         <Motion
//           delay={0.75}
//           className="flex cursor-pointer justify-start gap-1 transition-colors duration-300"
//         >
//           {journey.map((data, index) => (
//             <div key={index}>
//               <h1 className="text-base sm:text-xl md:text-2xl">{data.phase}</h1>
//               <h1>{data.title}</h1>
//               <h1>{data.subtitle}</h1>
//             </div>
//           ))}
//         </Motion>
//       </div>
//     </section>
//   )
// }

// export default OurJourneySection
