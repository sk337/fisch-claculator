/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OddsImport } from './routes/odds'

// Create Virtual Routes

const ValueLazyImport = createFileRoute('/value')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ValueLazyRoute = ValueLazyImport.update({
  id: '/value',
  path: '/value',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/value.lazy').then((d) => d.Route))

const OddsRoute = OddsImport.update({
  id: '/odds',
  path: '/odds',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/odds': {
      id: '/odds'
      path: '/odds'
      fullPath: '/odds'
      preLoaderRoute: typeof OddsImport
      parentRoute: typeof rootRoute
    }
    '/value': {
      id: '/value'
      path: '/value'
      fullPath: '/value'
      preLoaderRoute: typeof ValueLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/odds': typeof OddsRoute
  '/value': typeof ValueLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/odds': typeof OddsRoute
  '/value': typeof ValueLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/odds': typeof OddsRoute
  '/value': typeof ValueLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/odds' | '/value'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/odds' | '/value'
  id: '__root__' | '/' | '/odds' | '/value'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  OddsRoute: typeof OddsRoute
  ValueLazyRoute: typeof ValueLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  OddsRoute: OddsRoute,
  ValueLazyRoute: ValueLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/odds",
        "/value"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/odds": {
      "filePath": "odds.tsx"
    },
    "/value": {
      "filePath": "value.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
