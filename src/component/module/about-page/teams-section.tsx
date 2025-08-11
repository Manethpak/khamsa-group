import React from 'react'
import { Schema } from '@/lib/schema'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'
import { Motion } from '@/component/ui/motion'

interface Props {
  team: Schema['Team']
}

const TeamsSection = ({ team }: Props) => {
  const firstRow = team.slice(0, 2)
  const secondRow = team.slice(2)
  return (
    <div className="subtitle-about flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-screen-2xl flex-col gap-24 px-5 py-14 md:px-10 lg:px-24">
        <div className="flex w-full flex-col items-center gap-3">
          <Motion delay={0.5} className="title">
            OUR TEAM
          </Motion>
          <Motion delay={0.75} className="subtitle-about">
            Empowering Entrepreneur
          </Motion>
          <div className="mt-6 w-full space-y-5">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
              {firstRow.map((data) => (
                <Motion
                  delay={1}
                  key={data.name}
                  className="flex h-full max-w-3xl flex-col items-center justify-center gap-5 rounded bg-polar/50 py-10 text-lg"
                >
                  <Image
                    src={getImageUrl(data.image! as string)}
                    alt={data.name!}
                    width={250}
                    height={250}
                    className="max-h-52 max-w-52 object-cover object-center"
                  />
                  <div className="text-center">
                    <h1 className="title text-lg">{data.name}</h1>
                    <p className="subtitle text-base">{data.position}</p>
                  </div>
                </Motion>
              ))}
            </div>
            {secondRow.length > 0 && (
              <div className="mt-6 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {secondRow.map((data) => (
                  <Motion
                    delay={1}
                    key={data.name}
                    className="flex h-full max-w-3xl flex-col items-center justify-center gap-5 rounded bg-polar/50 py-10 text-lg"
                  >
                    <Image
                      src={getImageUrl(data.image! as string)}
                      alt={data.name!}
                      width={250}
                      height={250}
                      className="max-h-52 max-w-52 object-cover object-center"
                    />
                    <div className="text-center">
                      <h1 className="title text-lg">{data.name}</h1>
                      <p className="subtitle text-base">{data.position}</p>
                    </div>
                  </Motion>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsSection
