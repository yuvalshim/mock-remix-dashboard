import { useLoaderData, json, useTransition } from "remix";
import type { LoaderFunction } from "remix";
import { getInvoice, Invoice } from "~/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.invoice) {
    throw new Response(`No invoice ID provided`, {
      status: 404,
    });
  }

  return json(await getInvoice(params.invoice), {
    headers: { "Cache-Control": "max-age=30" },
  });
};

export default () => {
  const transition = useTransition();
  const invoice = useLoaderData<Invoice>();

  if (!invoice?.id && transition.state === "loading") {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <label>{invoice.title}</label>
      <h3 style={{ color: "#7b5acf" }}>{invoice.amount}</h3>
      <span>{invoice.currency}</span>
    </div>
  );
};
