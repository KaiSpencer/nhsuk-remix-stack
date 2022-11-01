import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import nhsukFrontend from "./../node_modules/nhsuk-frontend/dist/nhsuk.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: nhsukFrontend }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "NHSUK Remix Stack",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <Header />
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <Footer />
    </html>
  );
}
