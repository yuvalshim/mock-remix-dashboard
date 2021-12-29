import { useLoaderData, Link, json } from "remix";
import type { LoaderFunction } from "remix";
import { getInvoices, Invoice } from "~/db.server";

export const loader: LoaderFunction = async () => {
  const invoices = await getInvoices();

  /* Reduce the data on the server - less Junk on the network */
  const list = invoices.slice(0, 2).map(({ id, title, year, amount }) => ({
    id,
    title,
    year,
    amount,
  }));

  return json(list, {
    headers: { "Cache-Control": "max-age=30" },
  });
};

export default () => {
  const invoices = useLoaderData<Invoice[]>();

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="boxes">
        <div className="box">
          {invoices.map((invoice) => (
            <Link
              key={invoice.id}
              to={`/sales/invoices/${invoice.id}`}
              prefetch="intent"
            >
              <li className="invoiceRow">
                <span>
                  <h5>{invoice.title}</h5>
                  <label>{invoice.year}</label>
                </span>

                <span>
                  <h5>{invoice.amount}</h5>
                </span>
              </li>
            </Link>
          ))}
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};
