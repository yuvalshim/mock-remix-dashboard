import { Outlet, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import { getUser, User } from "~/db.server";
import Nav from "~/components/Nav";

/* Server function - Talk with the DB! */
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
