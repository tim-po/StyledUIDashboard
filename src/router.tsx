import React from 'react'
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import Dashboard from './Widgets/Dashboard'
import ModalContextProvider from './LayoutComponents/modalContextProvider'
import Card from './StyledUI/BuildingBlocks/Card'

export enum RoutesName {
  ROOT = '/',
}

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    errorElement: <Card>Error</Card>,
    element: (
      <ModalContextProvider>
        <Outlet />
      </ModalContextProvider>
    ),
    children: [
      {
        path: RoutesName.ROOT,
        element: <Dashboard />,
      },
    ],
  },
]

const sentryCreateBrowserRouter = Sentry.wrapCreateBrowserRouter(createBrowserRouter)

export const router = sentryCreateBrowserRouter(routerConfig)
