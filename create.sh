#!/usr/bin/env bash

{

set -e  # Exit immediately if a command exits with a non-zero status

function main () {
  # Define variables
  read -p "Enter the name of your project: " PROJECT_DIR

  mkdir $PROJECT_DIR
  cd $PROJECT_DIR
  mkdir assets
  mkdir dist
  mkdir src
  mkdir tests

  curl -s -O https://raw.githubusercontent.com/PsySecGroup/forge-server/main/.gitignore
  curl -s -O https://raw.githubusercontent.com/PsySecGroup/forge-server/main/README.md
  curl -s -O https://raw.githubusercontent.com/PsySecGroup/forge-server/main/eslint.config.js
  curl -s -O https://raw.githubusercontent.com/PsySecGroup/forge-server/main/tsconfig.json

  cat <<EOF > tests/index.ts
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('Empty Test', async () => {

})

test.run()
EOF

  cat <<EOF > src/module.ts
import { startHttp as StartHttp } from '@psysecgroup/forge-server'
import { setRoutes } from './routes'

export const startHttp = async (routeSetter = setRoutes) => {
  return startHttp(setRoutes)
}
EOF

  cat <<EOF > src/index.ts
import { startHttp } from '@psysecgroup/forge-server'
import { setRoutes } from './routes'

async function main () {
  await startHttp(setRoutes)
}

main()
EOF

  cat <<EOF > src/routes.ts
export function setRoutes (fastify) {
  fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200)
    return { hello: 'world' }
  })
}
EOF

  cat <<EOF > package.json
{
  "name": "$PROJECT_DIR",
  "author": "",
  "version": "1.0.0",
  "description": "",
  "license": "None",
  "repository": {
    "type": "git",
    "url": ""
  },
  "bugs": {
    "url": "/issues"
  },
  "homepage": "#readme",
  "scripts": {
    "dev": "npx tsx watch src/index.ts",
    "lint": "npx tsc --noEmit && npx eslint src/index.ts",
    "test": "npx uvu -r esbuild-register tests/",
    "build": "npm run build-standalone && npm run build-module",
    "build-standalone": "npx esbuild src/index.ts --bundle --platform=node --minify --outfile=dist/standalone.js",
    "build-module": "npx esbuild src/module.ts --bundle --platform=node --minify --outfile=dist/module.js",
    "compile": "npm run lint && npm run test && npm run build",
    "start": "node dist/standalone.js"
  },
  "main": "./dist/module.js",
  "module": "./dist/module.js",
  "types": "./src/index.d.ts",
  "devDependencies": {
    "@types/node": "^20.14.1",
    "@typescript-eslint/eslint-plugin": "8.0.0-alpha.10",
    "@typescript-eslint/parser": "8.0.0-alpha.10",
    "dotenv": "^16.4.5",
    "esbuild": "^0.21.4",
    "esbuild-register": "^3.5.0",
    "eslint": "9.0.0",
    "globals": "^15.3.0",
    "tsx": "^4.11.2",
    "typescript": "^5.4.5",
    "typescript-eslint": "8.0.0-alpha.10",
    "uvu": "^0.5.6"
  },
  "dependencies": {
    "@psysecgroup/forge-server": "https://github.com/PsySecGroup/forge-server.git"
  }
}
EOF

  npm install
  git init
  npm run build
  cd ..
  rm create.sh
  cd $PROJECT_DIR
  echo ""
  echo ">>> Press Ctrl + C to stop the HTTP server <<<"
  npm start
}

main

}