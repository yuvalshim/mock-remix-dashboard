import { Outlet, useLoaderData, NavLink } from "remix";
import type { LoaderFunction } from "remix";
import { getInvoices, Invoice } from "~/db.server";

export const loader: LoaderFunction = async () => {
  return getInvoices();
};

export default () => {
  const invoices = useLoaderData<Invoice[]>();

  return (
    <div>
      <h5 className="sectionTitle uppercase" style={{ color: "#f3be00" }}>
        Invoices list
      </h5>

      <div className="invoicesList">
        <ul className="flexColumn">
          {invoices.map((invoice) => (
            <NavLink
              key={invoice.id}
              to={invoice.id}
              className={({ isActive }) => (isActive ? "active" : "")}
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
            </NavLink>
          ))}
        </ul>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
