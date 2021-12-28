import { useLoaderData, json } from "remix";
import type { LoaderFunction } from "remix";
import { getInvoice, Invoice } from "~/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.invoice) {
    throw new Response(`No invoice ID provided`, {
      status: 404,
    });
  }

  return json(await getInvoice(params.invoice), {
    headers: { "Cache-Control": "max-age=10" },
  });
};

export default () => {
  const invoice = useLoaderData<Invoice>();

  return (
    <div>
      <label>{invoice.title}</label>
      <h3 style={{ color: "#7b5acf" }}>{invoice.amount}</h3>
      <span>{invoice.currency}</span>
    </div>
  );
};
