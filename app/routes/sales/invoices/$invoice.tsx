import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getInvoice, Invoice } from "~/db";

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.invoice) {
    throw new Response(`No invoice ID provided`, {
      status: 404,
    });
  }

  return getInvoice(params.invoice);
};

export default () => {
  const invoice = useLoaderData<Invoice>();

  return (
    <div>
      <div>{invoice.title}</div>
      <div>{invoice.currency}</div>
      <div>{invoice.amount}</div>
    </div>
  );
};
