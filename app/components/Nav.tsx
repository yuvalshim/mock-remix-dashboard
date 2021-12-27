import { NavLink } from "remix";
import { User } from "~/db";

let activeClassName = "activeNav";

const classNameFunc = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "";

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
    </nav>
  );
}
