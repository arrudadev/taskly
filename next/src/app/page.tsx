import Link from 'next/link'

import { buttonVariants } from './components/ui/button'
import { cn } from './lib/utils'

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Taskly
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A simple task management app built with Next.js, Prisma, and shadcn
          ui.
        </p>
        <div className="space-x-4">
          <Link href="/login" className={cn(buttonVariants({ size: 'lg' }))}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
