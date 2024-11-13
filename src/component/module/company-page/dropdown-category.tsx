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
      },
      ...category.map((each) => ({
        title: each.title,
        slug: each.slug,
      })),
    ]
  }, [category])

  return (
    <div className="subtitle relative flex w-full max-w-64 items-center justify-between gap-2">
      <p className="font-semibold">Category: </p>

      <div className="flex w-full justify-center">
        <Listbox
          value={slug}
          onChange={(value: string) => {
            router.push(value)
          }}
        >
          <ListboxButton
            className={cn(
              'relative flex w-full cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 text-left font-medium'
            )}
          >
            <span className="flex justify-end capitalize">
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
  )
}
