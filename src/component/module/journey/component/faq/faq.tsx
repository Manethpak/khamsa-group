import { Motion } from '@/component/ui/motion'
import { Question } from '@/constants'
import React, { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { GrClose } from 'react-icons/gr'

const Faq = () => {
  const [open, setOpen] = useState<number[]>([])
  const containerControls = useAnimationControls()

  const handleClick = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter((i) => i !== index))
    } else {
      setOpen([...open, index])
    }
  }

  useEffect(() => {
    if (open.length > 0) {
      containerControls.start('open')
    } else {
      containerControls.start('closed')
    }
  }, [open, containerControls])
  return (
    <div className="flex w-full justify-center px-10">
      <div className="flex h-full w-full max-w-7xl flex-col items-center gap-24 py-24">
        <Motion className="flex flex-col items-center gap-5 text-center font-extrabold text-secondary">
          <p className="text-base text-primary">FAQ</p>
          <h1 className="max-w-[560px] text-4xl md:text-5xl">
            Frequently asked questions.
          </h1>
        </Motion>
        <div className="flex w-full cursor-pointer flex-col items-center gap-3">
          {Question.map((data, index) => (
            <Motion
              key={data.title}
              className="flex h-full w-full max-w-3xl flex-col items-center justify-center rounded-3xl bg-polar p-5 px-8 text-lg"
            >
              <div
                onClick={() => handleClick(index)}
                className={`grid w-full justify-items-stretch ${open.includes(index) ? 'gap-5' : 'gap-0'}`}
              >
                <div className="flex items-start justify-between">
                  <h1 className="font-extrabold text-secondary">
                    {data.title}
                  </h1>
                  <motion.p
                    initial={{ rotate: open.includes(index) ? '0deg' : '0deg' }}
                    animate={{
                      rotate: open.includes(index) ? '-90deg' : '45deg',
                    }}
                    transition={{
                      duration: 0.5,
                      type: 'tween',
                      ease: 'backInOut',
                    }}
                    className="flex h-7 w-7 items-center justify-center font-light"
                  >
                    {open.includes(index) ? <GrClose /> : <GrClose />}
                  </motion.p>
                </div>
                <motion.p
                  animate={open.includes(index) ? 'open' : 'closed'}
                  initial="closed"
                  variants={{
                    open: {
                      height: 'auto',
                      opacity: 1,
                      y: '-5px',
                      transition: {
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 150,
                      },
                    },
                    closed: {
                      opacity: 0,
                      height: 0,
                      y: '-20px',
                      transition: {
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 150,
                        damping: 15,
                      },
                    },
                  }}
                  className="w-full max-w-[666px]"
                >
                  {data.description}
                </motion.p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
