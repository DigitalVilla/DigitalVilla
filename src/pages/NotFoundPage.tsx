import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Aurora } from '@/components/ui/Aurora'
import { easeOutExpo } from '@/lib/motion'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
        <Aurora />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="font-display text-[6rem] font-semibold leading-none tracking-tight text-gradient md:text-[10rem]"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
          className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl"
        >
          This page took a different path.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
          className="mt-3 max-w-md text-pretty text-muted"
        >
          The page you're looking for doesn't exist or has moved. Let's get you
          back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
          className="mt-8"
        >
          <PremiumButton as="link" to="/">
            <ArrowLeft className="size-4" />
            Back home
          </PremiumButton>
        </motion.div>
      </section>
    </>
  )
}
