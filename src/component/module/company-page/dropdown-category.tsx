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
    <div className="flex items-center gap-2 p-1 sm:min-w-max">
      <p>Category: </p>

      <div className="w-full">
        <Listbox
          value={slug}
          onChange={(value: string) => {
            router.push(value)
          }}
        >
          <ListboxButton
            className={cn(
              'relative z-20 flex w-52 cursor-pointer items-center justify-between rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-secondary'
            )}
          >
            <span className="capitalize">
              {display.find((each) => each.slug === slug)?.title}
            </span>
            <ChevronDownIcon
              className="group size-6 fill-white/60"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={cn(
              'absolute z-10 mt-1 max-h-56 max-w-36 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm'
            )}
          >
            {display.map((each) => (
              <ListboxOption
                key={each.slug}
                value={each.slug}
                className="data-hover:bg-white/10 group flex cursor-default select-none gap-2 rounded-lg px-3 py-1.5 data-[hover]:bg-primary"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-secondary">{each.title}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  )
}
