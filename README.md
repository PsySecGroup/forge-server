Server Forge
============

The PsySec Forge for server projects. Uses Fastify, esbuild, uvu, dotenv, and TypeScript to build secure HTTP servers quickly.  We support the following features right out the box:

* [Reply compression](https://github.com/fastify/fastify-compress?tab=readme-ov-file#per-route-options) ([Settings](src/plugins/compress.ts))
* [Cookies](https://github.com/fastify/fastify-cookie?tab=readme-ov-file#example) ([Settings](src/plugins/cookie.ts))
* [CORS](https://github.com/fastify/fastify-cors?tab=readme-ov-file#options) ([Settings](src/plugins/cors.ts))
* [CSRF Protection](https://github.com/fastify/csrf-protection) (For [cookies](https://github.com/fastify/csrf-protection?tab=readme-ov-file#use-with-fastifycookie) and [sessions](https://github.com/fastify/csrf-protection?tab=readme-ov-file#use-with-fastifysession)) ([Settings](src/plugins/csrf.ts))
* [From Body Parsing](https://github.com/fastify/fastify-formbody?tab=readme-ov-file#example) ([Settings](src/plugins/formbody.ts))
* [Security Headers](https://github.com/fastify/fastify-helmet?tab=readme-ov-file#example---fastifyhelmet-configuration-using-the-helmet-shorthand-route-option) ([Settings](src/plugins/helmet.ts))
* [JWT Tokens](https://github.com/fastify/fastify-jwt?tab=readme-ov-file#usage) ([Settings](src/plugins/jwt.ts))
* [Support for Express middleware](https://github.com/fastify/middie?tab=readme-ov-file#restrict-middleware-execution-to-a-certain-paths) ([Settings](src/plugins/middleware.ts))
* [File Uploading](src/uploads.ts) ([Settings](src/plugins/multipart.ts))
* [Rate Limiting](https://github.com/fastify/fastify-rate-limit?tab=readme-ov-file#options) ([Settings](src/plugins/rateLimit.ts))
* [Sessions](https://github.com/fastify/session?tab=readme-ov-file#usage) ([Settings](src/plugins/session.ts))
* [Static File Serving](https://github.com/fastify/fastify-static?tab=readme-ov-file#usage) ([Settings](src/plugins/static.ts))
* [Graceful shutdowns](https://github.com/dnlup/fastify-traps?tab=readme-ov-file#custom-hooks) ([Settings](src/plugins/traps.ts))
* [Pressure releif](https://github.com/fastify/fastify-multipart?tab=readme-ov-file#usage) ([Settings](src/plugins/underPressure.ts))

## New Project

To create a new project that uses the `forge-server`, run the following:

```bash
curl -s -O https://raw.githubusercontent.com/PsySecGroup/forge-server/main/create.sh && ./create.sh
```

Then modify the routes in `src/routes.ts` and use the commands above to test out your new server.

## Updating Project

As we add new featuers to the `forge-server`, you'll want to update them and bring them to your project.  Run the following command to do so:

```bash
npm update @psysecgroup/forge-server
````

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
import { setRoutes } from './routes'

async function main () {
  await startHttp(setRoutes)
}

main()
```

We even have a [default endpoint to test uploads](src/routes.ts).  You can try it out with:

```bash
// curl -X POST -F 'file=@/path/to/file' http://localhost:3000/upload
````

The result will be the path where the file was saved.

## Deployment

To prepare a deployment:

* Run `npm run compile`
* Create a `server` folder on your destination.
* In that folder, make two more folders: `assets` and `dist`
* Copy  `dist/index.js` to the destination's `dist` folder
* Copy the contents of your `assets` folder to the destination's `assets` folder
* From the destination's `server` folder, run the HTTP server with `node index.js`

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