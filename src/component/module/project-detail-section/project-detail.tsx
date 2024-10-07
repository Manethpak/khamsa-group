// ProjectDetail.js
import React from 'react'
import Image from 'next/image'
import { project_v2 } from '@/constants'

const ProjectDetail = () => {
  return (
    <div className="font-lato container mx-auto mt-8 p-4 md:p-6 lg:p-8">
      {/* Title */}
      <h1 className="font-secondprimary mb-4 bg-blue-500 text-center text-2xl capitalize md:text-4xl lg:text-5xl">
        {project_v2.title || 'Project Title'}{' '}
        {/* <span className="text-sm text-zinc-400">(2022-present)</span> */}
      </h1>

      {/* Date */}
      <div className="mb-8 flex w-full items-center justify-center border-b border-t px-4 py-2">
        <time className="text-sm text-zinc-400 md:text-base lg:text-lg">
          {project_v2.date || 'Date not available'}
        </time>
      </div>

      {/* Loop through descriptions and images */}
      {project_v2.descriptions.map((desc, index) => (
        <div key={index} className="mb-8">
          {/* Description */}
          <p className="mx-auto mb-6 max-w-3xl text-center text-base md:text-left md:text-lg lg:text-xl">
            {desc || 'No description available.'}
          </p>

          {/* Image */}
          {project_v2.images[index] && (
            <div className="flex justify-center">
              <Image
                src={project_v2.images[index]}
                width={475}
                height={314}
                alt={`Image for ${project_v2.title}`}
                className="rounded-xl"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectDetail
