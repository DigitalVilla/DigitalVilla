/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Contact form endpoint (the Lambda Function URL). Unset → mail-client fallback. */
  readonly VITE_CONTACT_ENDPOINT?: string
}
