import React from 'react'

const BlogCard = () => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* First Card */}
      <div className="card overflow-hidden rounded-xl bg-white shadow-lg">
        <figure className="h-[401.48px] w-full">
          <img
            src="/images/AI Farm picture.png"
            alt="company"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-[ #8ACEC0] mb-2 text-xl font-semibold">
            Business Review
          </h2>
          <p className="text-gray-600">The Message from the President</p>
          <div className="card-actions mt-4 text-gray-500">Sep 6, 2022</div>
        </div>
      </div>

      {/* Second Card */}
      <div className="card overflow-hidden rounded-xl bg-white shadow-lg">
        <figure className="h-[401.48px] w-full">
          <img
            src="/images/robotcon competition.png"
            alt="company"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title mb-2 text-xl font-semibold">Drone</h2>
          <p className="text-gray-600"> AI FARM RFI UAVx DRONE LAB</p>
          <div className="card-actions mt-4 text-gray-500">Sep 6, 2022</div>
        </div>
      </div>

      {/* Third Card */}
      <div className="card overflow-hidden rounded-xl bg-white shadow-lg">
        <figure className="h-[401.48px] w-full">
          <img
            src="/images/student.png"
            alt="company"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title mb-2 text-xl font-semibold">New Letter</h2>
          <p className="text-gray-600">
            ABU Asia-Pacific Robot Contest (RoboconCompetition) 2023
          </p>
          <div className="card-actions mt-4 text-gray-500">Sep 6, 2022</div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="card overflow-hidden rounded-xl bg-white shadow-lg">
        <figure className="h-[401.48px] w-full">
          <img
            src="/images/stem.png"
            alt="company"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title mb-2 text-xl font-semibold">Resources</h2>
          <p className="text-gray-600">Stem</p>
          <div className="card-actions mt-4 text-gray-500">Sep 6, 2022</div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
