import React from 'react'
import Image from 'next/image'
import { GoArrowUpRight } from 'react-icons/go'

const BlogSection = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center py-10">
      <div className="w-full max-w-screen-2xl px-5 md:px-10 lg:px-24">
        <h1 className="text-3xl font-semibold">Recent Blog posts </h1>
        <div className="mt-10 flex h-full w-full flex-col gap-4 md:gap-8 xl:flex-row">
          {/* MAIN BLOG */}
          <div className="flex cursor-pointer flex-col xl:w-[55%]">
            <div className="aspect-video w-full lg:h-[450px] xl:aspect-square xl:h-[700px]">
              <Image
                src="/images/Factory.jpg"
                width={700}
                height={700}
                className="h-full w-full object-cover object-center"
                alt="blog"
                priority
              />
            </div>
            <div className="flex h-full flex-col gap-4 py-4 pb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-semibold xl:text-5xl">
                  Pirate ipsum arrgh
                </h1>
                <p className="font-semibold">14 Mar 2024</p>
              </div>
              <div className="flex w-full items-end justify-between gap-10">
                <p className="w-full max-w-full text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Doloribus.Pirate ipsum arrgh bounty warp jack. Hands
                  bucko shot a tea sail coxswain sail. Arr rat brethren
                  starboard shiver crow&apos;s black smartly shiver shiver. Dock
                  prey buccaneer chain man just rum pirate...
                </p>
                <GoArrowUpRight className="h-10 w-20" />
              </div>
            </div>
          </div>
          {/* SUB BLOGS */}
          <div className="flex w-full min-w-[200px] flex-col gap-6 xl:w-[45%]">
            <div className="flex max-h-[150px] min-h-[100px] w-full cursor-pointer md:max-h-[250px]">
              <div className="aspect-square w-[40%] min-w-[150px] max-w-[200px]">
                <Image
                  src="/images/office1.jpeg"
                  alt="blog"
                  priority
                  className="h-full w-full object-cover object-center"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-4 px-4">
                <div className="overflow-hidden">
                  <h2 className="mb-2 text-xl font-medium md:text-3xl">
                    Pirate ipsum arrgh
                  </h2>
                  <p>
                    Pirate ipsum arrgh bounty warp jack. Hands bucko shot a tea
                    sail coxswain sail. Arr rat brethren starboard shiver
                    crow&apos;s black smartly shiver shiver. Dock prey buccaneer
                    chain man just rum pirate...
                  </p>
                </div>
                <span className="font-semibold">14 Mar 2024</span>
              </div>
            </div>

            <div className="flex max-h-[150px] min-h-[100px] w-full cursor-pointer md:max-h-[250px]">
              <div className="aspect-square w-[40%] min-w-[150px] max-w-[200px]">
                <Image
                  src="/images/student.png"
                  alt="blog"
                  priority
                  className="h-full w-full object-cover object-center"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-4 px-4">
                <div className="overflow-hidden">
                  <h2 className="mb-2 text-xl font-medium md:text-3xl">
                    Pirate ipsum arrgh
                  </h2>
                  <p>
                    Pirate ipsum arrgh bounty warp jack. Hands bucko shot a tea
                    sail coxswain sail. Arr rat brethren starboard shiver
                    crow&apos;s black smartly shiver shiver. Dock prey buccaneer
                    chain man just rum pirate...
                  </p>
                </div>
                <span className="font-semibold">14 Mar 2024</span>
              </div>
            </div>

            <div className="flex max-h-[150px] min-h-[100px] w-full cursor-pointer md:max-h-[250px]">
              <div className="aspect-square w-[40%] min-w-[150px] max-w-[200px]">
                <Image
                  src="/images/AI Farm picture.png"
                  alt="blog"
                  priority
                  className="h-full w-full object-cover object-center"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-4 px-4">
                <div className="overflow-hidden">
                  <h2 className="mb-2 text-xl font-medium md:text-3xl">
                    Pirate ipsum arrgh
                  </h2>
                  <p>
                    Pirate ipsum arrgh bounty warp jack. Hands bucko shot a tea
                    sail coxswain sail. Arr rat brethren starboard shiver
                    crow&apos;s black smartly shiver shiver. Dock prey buccaneer
                    chain man just rum pirate...
                  </p>
                </div>
                <span className="font-semibold">14 Mar 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
