/**
 * A tab left open across a deploy still holds an index.html that points at
 * hashed chunks which no longer exist on S3. Rather than crash on the next
 * navigation, reload once so the tab picks up the current build.
 *
 * Returns true when a reload was triggered. A short cooldown in
 * sessionStorage stops a genuinely broken server from causing a reload loop.
 */
const KEY = 'dv:stale-build-reload'
const COOLDOWN_MS = 30_000

export function reloadOnceForStaleBuild(): boolean {
  try {
    const last = Number(sessionStorage.getItem(KEY) ?? 0)
    if (Date.now() - last < COOLDOWN_MS) return false
    sessionStorage.setItem(KEY, String(Date.now()))
  } catch {
    // No sessionStorage (private mode, blocked storage): without a guard we
    // can't rule out a loop, so let the error surface instead.
    return false
  }
  window.location.reload()
  return true
}
