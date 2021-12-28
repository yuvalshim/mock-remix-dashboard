import { LoaderFunction } from "remix";

export let loader: LoaderFunction = async () => {
  return [{ name: "yuval" }];
};

export default () => {
  return (
    <div>
      <h1>accounts</h1>
    </div>
  );
};
