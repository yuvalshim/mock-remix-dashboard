import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import NProgress from "nprogress";
import nProgressStyles from "~/styles/ng.css";
import stylesUrl from "~/styles/global.css";
import stylesTypography from "~/styles/typography.css";
import flexHelpers from "~/styles/flexHelpers.css";

export const meta: MetaFunction = () => ({ title: "Remix Dashboard" });

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: stylesTypography },
  { rel: "stylesheet", href: flexHelpers },
  { rel: "preload", as: "font", href: "/font/founders-grotesk-bold.woff2" },
  { rel: "stylesheet", href: nProgressStyles },
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
      <App />

      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
  </html>
);

const App = () => {
  let transition = useTransition();

  React.useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === "idle") NProgress.done();
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start();
  }, [transition.state]);

  return <Outlet />;
};
