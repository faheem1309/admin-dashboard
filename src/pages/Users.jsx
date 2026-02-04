import { useEffect, useMemo, useState } from "react";
import { users as mockUsers } from "../data/mockData";
import UsersTable from "../components/UsersTable";

export default function Users() {
const [users, setUsers] = useState([]);
const [query, setQuery] = useState("");
const [role, setRole] = useState("all");
const [status, setStatus] = useState("all");
const [sortKey, setSortKey] = useState("name");
const [sortDir, setSortDir] = useState("asc");

useEffect(() => {
setUsers(mockUsers);
}, []);

const roles = useMemo(() => {
const values = new Set(users.map(user => user.role));
return ["all", ...values];
}, [users]);

const statuses = useMemo(() => {
const values = new Set(users.map(user => user.status));
return ["all", ...values];
}, [users]);

const filteredUsers = useMemo(() => {
const term = query.trim().toLowerCase();
let list = users.filter(user => {
const matchesQuery =
term.length === 0 ||
user.name.toLowerCase().includes(term) ||
user.email.toLowerCase().includes(term);
const matchesRole = role === "all" || user.role === role;
const matchesStatus = status === "all" || user.status === status;
return matchesQuery && matchesRole && matchesStatus;
});

list = [...list].sort((a, b) => {
const dir = sortDir === "asc" ? 1 : -1;
if (sortKey === "id") {
return (a.id - b.id) * dir;
}
const left = String(a[sortKey]).toLowerCase();
const right = String(b[sortKey]).toLowerCase();
return left.localeCompare(right) * dir;
});

return list;
}, [users, query, role, status, sortKey, sortDir]);

return (
<div className="users-page">
<div className="toolbar">
<div className="toolbar-row">
<input
className="input"
type="search"
placeholder="Search name or email..."
value={query}
onChange={event => setQuery(event.target.value)}
/>
<select className="select" value={role} onChange={event => setRole(event.target.value)}>
{roles.map(option => (
<option key={option} value={option}>
{option === "all" ? "All roles" : option}
</option>
))}
</select>
<select className="select" value={status} onChange={event => setStatus(event.target.value)}>
{statuses.map(option => (
<option key={option} value={option}>
{option === "all" ? "All statuses" : option}
</option>
))}
</select>
<select className="select" value={sortKey} onChange={event => setSortKey(event.target.value)}>
<option value="name">Sort by name</option>
<option value="email">Sort by email</option>
<option value="role">Sort by role</option>
<option value="status">Sort by status</option>
<option value="id">Sort by id</option>
</select>
<select className="select" value={sortDir} onChange={event => setSortDir(event.target.value)}>
<option value="asc">Asc</option>
<option value="desc">Desc</option>
</select>
</div>
<div className="toolbar-meta">
Showing {filteredUsers.length} of {users.length} users
</div>
</div>
<UsersTable users={filteredUsers} />
</div>
);
}
