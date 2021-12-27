import { NavLink, Outlet } from "remix";
import type { LinksFunction } from "remix";
import salesStyle from "~/styles/sales.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: salesStyle },
];

const tabs = ["overview", "invoices", "subscriptions", "customers"] as const;

export default () => {
  return (
    <div>
      <h1>sales</h1>

      <div className="tabs">
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={tab}
            style={({ isActive }) => (isActive ? { color: "#000" } : {})}
          >
            {tab}
          </NavLink>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
