/// <reference path="../.astro/types.d.ts" />
// import '../.astro/types.d.ts'

interface ImportMetaEnv {
  readonly PUBLIC_R2_BASE_URL: string
  readonly PUBLIC_WORKING_STATUS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
