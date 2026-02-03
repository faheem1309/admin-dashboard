import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

export default function App() {
const [page, setPage] = useState("dashboard");

return (
<div className="app">
<Sidebar setPage={setPage} />
<div className="main">
<Navbar />
{page === "dashboard" && <Dashboard />}
{page === "users" && <Users />}
</div>
</div>
);
}