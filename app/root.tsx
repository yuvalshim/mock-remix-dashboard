import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import stylesUrl from "~/styles/global.css";
import stylesTypography from "~/styles/typography.css";
import flexHelpers from "~/styles/flexHelpers.css";

export const meta: MetaFunction = () => ({ title: "Remix Dashboard" });

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: stylesTypography },
  { rel: "stylesheet", href: flexHelpers },
  { rel: "preload", as: "font", href: "/font/founders-grotesk-bold.woff2" },
];

export default () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <Meta />
      <Links />
    </head>

    <body>
      <Outlet />

      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
  </html>
);
