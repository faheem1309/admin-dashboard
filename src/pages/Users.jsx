import { useEffect, useState } from "react";
import { users as mockUsers } from "../data/mockData";
import UsersTable from "../components/UsersTable";

export default function Users() {
const [users, setUsers] = useState([]);

useEffect(() => {
setUsers(mockUsers);
}, []);
return <UsersTable users={users} />;
}