import { NavLink } from "remix";
import { User } from "~/db.server";

let activeClassName = "activeNav";

const classNameFunc = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "";

/*
  https://remix.run/docs/en/v1/api/remix#navlink
  */
export default function Nav({ name }: Partial<User>) {
  return (
    <nav className="flexColumn">
      <div>Facebook</div>

      <ul>
        <li>
          <NavLink to="/dashboard" className={classNameFunc}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/accounts" className={classNameFunc}>
            Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales" className={classNameFunc}>
            Sales
          </NavLink>
        </li>
      </ul>

      <h5 style={{ marginTop: "auto", paddingLeft: 15, color: "var(--pink)" }}>
        {name}
      </h5>

      <div style={{ paddingLeft: 15, marginTop: 15 }}>
        <form action="/logout" method="post">
          <button type="submit" className="button">
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}
