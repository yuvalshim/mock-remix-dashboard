import { redirect, Form } from "remix";
import type { ActionFunction, LinksFunction } from "remix";

import Bg from "~/components/Background";
import styles from "~/styles/login.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const action: ActionFunction = () => {
  return redirect("/dashboard");
};

export default () => {
  return (
    <div id="loginPage" className="main-wrapper flexCenter">
      <Bg />

      <Form method="post" className="flexColumn">
        <input type="text" placeholder="User" name="user" />
        <input type="password" placeholder="Password" name="password" />

        <button type="submit">Login</button>
      </Form>
    </div>
  );
};
