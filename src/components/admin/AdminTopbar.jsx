import { Bell } from "lucide-react";
import "./adminShell.css";

export default function AdminTopbar() {
  return (
    <header className="admin-topbar-v2">
      <label className="admin-topbar-v2__search">
        <input type="search" placeholder="Search resources, students or courses..." />
      </label>
      <div className="admin-topbar-v2__right">
        <button type="button" aria-label="Notifications" className="admin-topbar-v2__bell">
          <Bell size={16} strokeWidth={2.1} />
        </button>
        <div className="admin-topbar-v2__user">
          <strong>Executive Admin</strong>
          <span>SUPERUSER</span>
        </div>
        <span className="admin-topbar-v2__avatar" aria-label="Executive Admin" role="img" />
      </div>
    </header>
  );
}
