'use client' // Specify that this is a Client Component

import { IoShareOutline } from 'react-icons/io5'
import React from 'react'
import Image from 'next/image'
import { project_v2 } from '@/constants'
import Topic from './topic'


const ProjectDetail = () => {
  const handleShare = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(project_v2.title || 'Project Title')}&summary=${encodeURIComponent(project_v2.descriptions.join(' '))}&source=${encodeURIComponent('https://www.linkedin.com/company/khamsagroup/posts/?feedView=all')}`
    window.open(shareUrl, '_blank')
  }

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center p-4 font-manrope md:p-6 lg:p-8">
      {/* Title and Date */}
      <div className=" flex w-full flex-col items-center justify-center gap-10 text-center sm:flex-row sm:gap-12 md:gap-16 lg:gap-64">
        <h1 className="font-secondprimary w-[90%] max-w-[420px] text-3xl capitalize opacity-100 md:text-4xl lg:text-5xl">
          {project_v2.title || 'Project Title'}
        </h1>
        {/* Project Date */}
        <span className="font-manrope text-sm text-zinc-500 md:text-base lg:text-lg">
          2022 - present
        </span>
      </div>
      {/* Date with Share Icon */}
      <div className="mb-8 mt-8 flex w-full max-w-3xl items-center gap-8 border-b border-t px-4 py-6">
        <time className="font-manrope text-xs text-zinc-400 sm:text-sm md:text-base lg:text-base">
          {project_v2.date || 'Date not available'}
        </time>
        <IoShareOutline
          className="ml-auto cursor-pointer text-zinc-400"
          size={30}
          onClick={handleShare}
        />
      </div>

      {/* Loop through descriptions and images */}
      {project_v2.descriptions.map((desc, index) => (
        <div key={index} className="mb-8 flex w-full flex-col items-center">
          {/* Description */}
          <p className="mb-6 max-w-3xl text-left font-manrope text-xs font-normal sm:text-sm md:text-lg lg:text-base">
            {desc || 'No description available.'}
          </p>
          {/* Image */}
          {project_v2.images[index] && (
            <div className="flex w-full justify-center">
              <Image
                src={project_v2.images[index]}
                width={475} 
                height={314} 
                alt={`Image for ${project_v2.title}`}
                className="h-auto w-full max-w-[600px] rounded-xl sm:max-w-[450px] md:max-w-[475px] lg:max-w-[600px]"
              />
            </div>
          )}
        </div>
      ))}
      <Topic/>
    </div>
  )
}

export default ProjectDetail
