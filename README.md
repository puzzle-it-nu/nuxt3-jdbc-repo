# JDBC API server implemented using Nuxt3 and JDBC to ADS/Sqlite3

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

This API server crashes if started with `npm run dev` and then do the following:
- curl localhost:3000/api/version (should give you the jdbc version)
- edit `server/api/version.ts` and change 'Hello JDBC:' to something else, save
- (hmr will kick in but only partly because server crashes)
- curl localhost:3000/api/version (hangs because now the dev server errors completely)

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm might not work with the java package
pnpm install

# yarn not tested
yarn install

# bun not tested
bun install
```

## Development Server

Copy .env.example to .env and adjust

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm not tested
pnpm run dev

# yarn not tested
yarn dev

# bun not tested
bun run dev
```
Hot Module Reloading probably doesn't work because of the JavaVM :-(

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm not tested
pnpm run build

# yarn not tested
yarn build

# bun not tested
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm not tested
pnpm run preview

# yarn not tested
yarn preview

# bun not tested
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
