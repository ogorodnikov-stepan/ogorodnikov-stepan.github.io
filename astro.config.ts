import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import storyblok from '@storyblok/astro';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/page',
        pageContent: 'storyblok/page-content',
        header: 'storyblok/header',
        mid: 'storyblok/mid',
        main: 'storyblok/main',
        aside: 'storyblok/aside',
        section: 'storyblok/section',
        h2: 'storyblok/h2',
        link: 'storyblok/link',
        span: 'storyblok/span',
        ul: 'storyblok/ul',
        dl: 'storyblok/dl',
        dt: 'storyblok/dt',
        dd: 'storyblok/dd',
        nav: 'storyblok/nav',
        navItem: 'storyblok/nav-item',
        personal: 'storyblok/personal',
        contactsList: 'storyblok/contacts-list',
        contactLink: 'storyblok/contact-link',
        timeline: 'storyblok/timeline',
        timelineItem: 'storyblok/timeline-item',
        timelineItemTime: 'storyblok/timeline-item-time',
        timelineItemTitle: 'storyblok/timeline-item-title',
        timelineItemText: 'storyblok/timeline-item-text',
        langList: 'storyblok/lang-list',
        langListItem: 'storyblok/lang-item',
      },
      apiOptions: { region: 'eu' },
    })
  ],
  output: 'static',
  server: {
    port: 3000,
  },
  site: 'https://ogorodnikov-stepan.github.io',
  vite: {
    plugins: [basicSsl()],
  },
});