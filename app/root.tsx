import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import stylesUrl from "~/styles/global.css";
import stylesTypography from "~/styles/typography.css";
import flexHelpers from "~/styles/flexHelpers.css";

import { getUser, User } from "~/db";
import Nav from "~/components/Nav";

export const meta: MetaFunction = () => ({ title: "Remix Dashboard" });

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: stylesTypography },
  { rel: "stylesheet", href: flexHelpers },
  { rel: "preload", as: "font", href: "/font/founders-grotesk-bold.woff2" },
];

export const loader: LoaderFunction = async () => {
  return getUser();
};

export default function App() {
  const user = useLoaderData<User>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <Meta />
        <Links />
      </head>

      <body>
        <div className="main-wrapper">
          <Nav {...(user || {})} />

          <main>
            <Outlet />
          </main>
        </div>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
