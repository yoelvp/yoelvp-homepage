import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://yoelvalverde.netlify.app',
  integrations: [tailwind(), react()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-zinc-800 dark:text-zinc-200 text-4xl font-semibold white-to-secondary dark:white-to-primary',
          h2: 'text-zinc-800 dark:text-zinc-200 text-2xl font-semibold white-to-secondary dark:white-to-primary',
          h3: 'text-zinc-800 dark:text-zinc-200 text-xl font-semibold white-to-secondary dark:white-to-primary',
          h4: 'text-zinc-800 dark:text-zinc-200 text-lg font-semibold white-to-secondary dark:white-to-primary',
          h5: 'text-zinc-800 dark:text-zinc-200 font-semibold white-to-secondary dark:white-to-primary',
          h6: 'text-zinc-800 dark:text-zinc-200 font-semibold white-to-secondary dark:white-to-primary',
          img: 'border border-slate-200 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6 white-to-secondary dark:white-to-primary',
          a: 'underline underline-offset-2 hover:text-primary decoration-primary white-to-primary',
          ul: 'list-disc'
        }
      ]
    ]
  }
});
