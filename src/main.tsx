import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import { Home, Rooms, Services, Prices, About, Contact, NotFound } from "./pages";

import { index } from './store';
import {Page} from "./components";

export enum Path {
  HOME = '/',
  ROOMS = '/rooms',
  SERVICES = '/services',
  PRICES = '/prices',
  ABOUT = '/about',
  CONTACT = '/contact',
  NOT_FOUND = '*',
}

const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <Page />,
    children: [
      { path: Path.HOME, element: <Home /> },
      { path: Path.ROOMS, element: <Rooms /> },
      { path: Path.SERVICES, element: <Services /> },
      { path: Path.PRICES, element: <Prices /> },
      { path: Path.ABOUT, element: <About /> },
      { path: Path.CONTACT, element: <Contact /> },
    ],
  },
  { path: Path.NOT_FOUND, element: <NotFound /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={index}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
