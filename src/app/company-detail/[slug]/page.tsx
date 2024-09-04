import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import Contact from '@/component/module/company-detail/contact'

const CompanyDetailPage = () => {
  return (
    <div>
      <div className="min-h-screen w-full px-4 py-8 md:px-10">
        <div className="flex w-full flex-col gap-4">
          <div className="flex h-full flex-col gap-4 xl:h-[583px] xl:flex-row">
            <div className="flex w-full flex-col gap-2 lg:gap-4 xl:w-[70%] xl:flex-row">
              <div className="h-[295px] bg-neutral-500 xl:h-full xl:w-[1058px]">
                image
              </div>
              <div className="flex w-full justify-between gap-2 lg:gap-4 xl:w-[12.5rem] xl:flex-col">
                <div className="aspect-square w-full bg-neutral-500 xl:w-[12.5rem]">
                  imgae2
                </div>
                <div className="aspect-square w-full bg-neutral-500 xl:w-[12.5rem]">
                  imgae1
                </div>
                <div className="aspect-square w-full bg-neutral-500 xl:w-[12.5rem]">
                  imgae3
                </div>
              </div>
            </div>
            <div className="flex h-[510px] flex-col gap-6 p-6 py-8 xl:h-[585px] xl:w-[30%]">
              <h1 className="text-3xl font-bold">Dreamslab</h1>
              <div className="flex flex-wrap gap-2">
                <span className="w-fit rounded bg-[#8ACEC0] px-[8px] py-[4px] text-white">
                  Software Development
                </span>
                <span className="w-fit rounded bg-[#8ACEC0] px-[8px] py-[4px] text-white">
                  AI
                </span>
                <span className="w-fit rounded bg-[#8ACEC0] px-[8px] py-[4px] text-white">
                  Robotic
                </span>
              </div>
              <div className="flex flex-col gap-8">
                <span>Found: 2021</span>
                <span>Location: Phnom penh</span>
                <span>Team size: 23</span>
                <span>Website: dreamslab.com</span>
                <span>Phone number: 012345678</span>
              </div>
              <div className="mt-4 flex items-center gap-5 text-4xl">
                <Link href="">
                  <FaFacebook />
                </Link>
                <Link href="">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[70%]">
            <div className="flex items-center justify-center text-wrap text-start">
              Pirate ipsum arrgh bounty warp jack. Buccaneer ensign chains yard
              jib pounders o&apos;nine coffer spyglass. Clipper men gunwalls
              lanyard pay man pinnace hail-shot topmast. Chandler gangplank men
              gold furl pounders clipper coast. Warp cup deck coxswain to lubber
              chase starboard jennys. Run buccaneer the league jolly jack
              pounders roger. Jones&apos; jones&apos; reef fluke arr arr plate.
              Belay shot guns sloop the spanish boatswain. Men me prey locker
              fluke gabion avast rat. Shiver mizzen chantey bixled shrouds log
              across. Coast grapple ballast bixled jennys sheet yawl. Nipper
              pounders crack ahoy hang lass cup plate gunwalls. Gangplank
              jones&apos; pay jones&apos; spanish. Lateen men lanyard crimp no
              chains quarterdeck. Halter lubber dead brace buccaneer fleet bixle
              arr aft. Cutlass the cat boat main fathom. Gun shrouds topgallant
              fluke topgallant spyglass hands pillage pounders. Execution seas
              rig chantey yer blow. Round mutiny spirits to hogshead. Scurvy gun
              timbers bounty nest tea seas chain hempen arrgh. Man sail jack
              tender chantey gabion
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default CompanyDetailPage
