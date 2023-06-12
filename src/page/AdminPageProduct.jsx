import { useNavigate } from "react-router-dom";

export default function AdminPageProduct() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li ><a onClick={() => navigate("/admin/prod")}>Productd management</a></li>
            <li><a>Member management</a></li>
          </ul>
        </div>
      </div>
      <div>
         Productd management
      </div>
    </div>
  )
}
