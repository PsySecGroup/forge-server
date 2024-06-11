Server Forge
============

The PsySec Forge for server projects. Uses Fastify, esbuild, uvu, dotenv, and TypeScript to build secure HTTP servers quickly.

## Commands

* `npm start`: Runs the compiled standalone HTTP server.
* `npm run dev`: Runs the source code and recompiles on code changes.
* `npm run lint`: Checks if your code is throwing syntax errors.
* `npm run test`: Runs tests on your code to make sure it's working.
* `npm run build`: Builds your TypeScript to a single JavaScript distribution.
* `npm run compile`: Lints, tests, and builds your JavaScript distribution.

## Development

```ts
import { startHttp } from '@psysecgroup/forge-server'

async function main () {
  await startHttp()
}

main()
```

## Deployment

To prepare a deployment:

* Run `npm run compile`
* Create a `server` folder on your destination.
* In that folder, make two more folders: `assets` and `dist`
* Copy  `dist/index.js` to the destination's `dist` folder
* Copy the contents of your `assets` folder to the destination's `assets` folder
* From the destination's `server` folder, run the HTTP server with `node index.js`
 
## New Project

To create a new project that uses the `forge-server`, run the following:

```bash
curl -o- https://raw.githubusercontent.com/PsySecGroup/forge-server/main/create.sh | bash
```

## Research

* Create a README that covers testing, building, templating, `.env`, and boilerplate assets
* Compile might be better off making a zip file with directory and assets all prepopulated
* https://github.com/fastify/fastify/blob/HEAD/docs/Reference/Validation-and-Serialization.md
* https://github.com/fastify/fastify/blob/HEAD/docs/Guides/Fluent-Schema.md
* https://github.com/fastify/fastify/blob/HEAD/docs/Reference/Request.md
* https://github.com/fastify/fastify/blob/HEAD/docs/Reference/ContentTypeParser.md
* https://github.com/fastify/fastify-auth
* https://github.com/fastify/fastify-bearer-auth
* https://github.com/fastify/fastify-caching
* https://github.com/Vanilla-IceCream/fastify-i18n
* https://github.com/Eomm/fastify-user-agent
* https://github.com/gj/fastify-ws