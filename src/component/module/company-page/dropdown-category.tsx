'use client'

import { Schema } from '@/lib/schema'
import { cn } from '@/lib/utils'
import {
  ListboxOption,
  Listbox,
  ListboxOptions,
  ListboxButton,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'

import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

type Props = {
  category: Schema['Category']
}

export default function DropdownCategory({ category }: Props) {
  const { slug }: { slug: string } = useParams()
  const router = useRouter()

  const display = useMemo(() => {
    return [
      {
        title: 'All',
        slug: 'all',
        description:
          'Explore the diverse subsidiary companies and extensive investment portfolio under Khamsa Group of Businesses, showcasing our strategic ventures, innovative projects, and contributions across various industries.',
      },
      ...category.map((each) => ({
        title: each.title,
        slug: each.slug,
        description: each.description,
      })),
    ]
  }, [category])

  const selectedCategoryTitle =
    slug === 'all'
      ? 'KGB Subsidiary'
      : display.find((each) => each.slug === slug)?.title

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex w-full flex-col justify-between gap-x-36 gap-y-5 md:flex-row">
        {/* Replace first "All" title with "KGB" */}
        <h1 className="heading-subtitle">{selectedCategoryTitle}</h1>

        {/* Show info based on the selected slug */}
        {display
          .filter((each) => each.slug === slug) // Show info only for the selected slug
          .map((each) => (
            <div key={each.slug} className="subtitle space-y-2">
              <h2 className="heading-subtitle text-xl">Info</h2>
              <p className="md:text-justify">{each.description}</p>
            </div>
          ))}
      </div>
      <div className="flex w-full items-center justify-end gap-2">
        <p className="font-semibold">Category: </p>
        <div className="subtitle relative flex w-fit items-center justify-between gap-2 rounded-full border px-3 py-2">
          <div className="flex w-full justify-center">
            <Listbox
              value={slug}
              onChange={(value: string) => {
                router.push(value)
              }}
            >
              <ListboxButton
                className={cn(
                  'relative flex w-full cursor-pointer items-center justify-between rounded-md text-left font-medium'
                )}
              >
                <span className="md:subtitle flex justify-end text-xs capitalize">
                  {display.find((each) => each.slug === slug)?.title}
                </span>
                <ChevronDownIcon className="group size-6" aria-hidden="true" />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                transition
                className={cn(
                  'absolute z-10 mr-5 mt-1 max-h-56 max-w-36 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-2 ring-primary ring-opacity-5 sm:text-sm'
                )}
              >
                {display.map((each) => (
                  <ListboxOption
                    key={each.slug}
                    value={each.slug}
                    className="data-hover:bg-white/10 subtitle group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-secondPrimary hover:text-white data-[hover]:bg-primary"
                  >
                    <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                    <div className="font-medium">{each.title}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  )
}
