# A Nuxt 3/4 pnpm monorepo example

## Why does this exist

At our company we have multiple Nuxt 3 sites. There's a bunch of crossover in terms of functionality and styling so it would be sensible to have...

- Shared stylesheets (we have established common styles, no plans of moving to tailwind)
- Shared components
- Shared Typescript types

..between the applications alongside standardised linting and formatting rules.

However, getting this up and running was more complex than expected, so here's the whole proof of concept for others to pick apart.

## Features

### Layers and workspaces

The demo consists of four pnpm workspaces:

- Typescript
- Sass Styling
- A Nuxt base layer
- A website that extends the base layer

The base layer uses Sass packages as local package imports so all that functionality is available in the base nuxt package. Any site that extends the base will also have the same base styles. Support for the external typescript needs to be added as a dev dependency in the extender nuxt projects.

### ESLint, Prettier with VSCode integration

You can lint everything via pnpm run -r lint. Formatting will be corrected on save in vscode.

### Nuxt 4 ready

Everything here runs in Nuxt 4 compatibility mode. Weirdly, compatibility mode doesn't seem to inherit from the base layer so I included it in the extended website.

### Wishlist

I'd like to have Husky integrated, but had no luck getting it running. Got a linting error about index.vue being a one word component. Tried a bunch of workarounds, no dice.
