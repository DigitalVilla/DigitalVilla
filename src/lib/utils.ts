/**
 * Tiny class-name combiner. Filters out falsy values and joins with a space.
 * Keeps the bundle lean — no clsx/tailwind-merge dependency required.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
