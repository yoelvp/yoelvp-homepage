import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold white-to-primary',
          h2: 'text-2xl font-bold white-to-primary',
          h3: 'text-xl font-bold white-to-primary',
          h4: 'text-lg font-bold white-to-primary',
          h5: 'font-bold white-to-primary',
          h6: 'font-bold white-to-primary',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6 white-to-primary',
          a: 'underline underline-offset-2 hover:text-primary decoration-primary white-to-primary',
          ul: 'list-disc'
        }
      ]
    ]
  }
});
