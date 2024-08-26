import { ChevronLeft } from 'lucide-react'
import { Button } from '../../ui/button'
import Link from 'next/link'

interface ButtonBackProps {
  href: string
  title: string
}

const ButtonBack = ({ href, title }: ButtonBackProps) => {
  return (
    <div className="flex items-center gap-4 text-2xl font-medium">
      <Link href={href} className="">
        <Button asChild variant="outline" size="icon">
          <ChevronLeft className="h-[34px] w-[34px]" />
        </Button>
        {title}
      </Link>
    </div>
  )
}

export default ButtonBack
