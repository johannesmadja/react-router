import { Outlet } from "react-router";
import { NavLink } from "react-router";

function ProfilePage() {
  return (
    <>
      <h2 style={{ textAlign: "center" }} className="m-10">
        {" "}
        Profile{" "}
      </h2>

      <ul>
        <li>
          {" "}
          <NavLink end to="">
            {" "}
            Overview{" "}
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="data"> OwnData </NavLink>{" "}
        </li>
      </ul>

      <div className="p-20" style={{ border: "2px solid gray" }}>
        <Outlet />
      </div>
    </>
  );
}

export default ProfilePage;
