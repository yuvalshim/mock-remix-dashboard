import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";

export const action: ActionFunction = async () => {
  return redirect("/login");
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
