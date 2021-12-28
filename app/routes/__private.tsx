import { Outlet, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import { getUser, User } from "~/db";
import Nav from "~/components/Nav";

export const loader: LoaderFunction = async () => {
  return getUser();
};

export default () => {
  const user = useLoaderData<User>();

  return (
    <div className="main-wrapper">
      <Nav {...(user || {})} />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
