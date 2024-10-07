/// <reference path="../.astro/types.d.ts" />
// import '../.astro/types.d.ts'

interface ImportMetaEnv {
  readonly PUBLIC_R2_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
