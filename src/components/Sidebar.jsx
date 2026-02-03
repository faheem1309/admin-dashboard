export default function Sidebar({ setPage }) {

return (
<div className="sidebar">
<h2>Admin</h2>
<button onClick={() => setPage("dashboard")}>Dashboard</button>
<button onClick={() => setPage("users")}>Users</button>
</div>
);
}