import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { getInvoices, Invoice } from "~/db.server";

export const loader: LoaderFunction = async () => {
  const invoices = await getInvoices();

  return invoices.slice(0, 2);
};

export default () => {
  const invoices = useLoaderData<Invoice[]>();

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="boxes">
        <div className="box">
          {invoices.map((invoice) => (
            <Link key={invoice.id} to={`/sales/invoices/${invoice.id}`}>
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
