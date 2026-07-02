import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 will-change-transform'

const variants: Record<Variant, string> = {
  primary:
    'bg-foreground text-background hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0',
  secondary:
    'border border-border-strong bg-surface/60 text-foreground backdrop-blur hover:border-accent hover:-translate-y-0.5 hover:bg-surface',
  ghost: 'text-muted hover:text-foreground',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[0.95rem]',
  lg: 'h-13 px-8 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: 'button'
  }

type ButtonAsLink = CommonProps & {
  as: 'link'
  to: string
}

type ButtonAsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    as: 'a'
    href: string
  }

export type PremiumButtonProps =
  | ButtonAsButton
  | ButtonAsLink
  | ButtonAsAnchor

export const PremiumButton = forwardRef<HTMLElement, PremiumButtonProps>(
  function PremiumButton(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      className,
      children,
      ...rest
    } = props as CommonProps & Record<string, unknown>

    const classes = cn(base, variants[variant], sizes[size], className)

    if (props.as === 'link') {
      const { to } = props
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={classes}
        >
          {children}
        </Link>
      )
    }

    if (props.as === 'a') {
      const { href, ...anchorRest } = rest as { href: string }
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }
)
