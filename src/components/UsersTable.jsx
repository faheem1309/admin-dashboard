export default function UsersTable({ users }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <span className="pill">{user.role}</span>
            </td>
            <td>
              <span className={`badge badge-${user.status.toLowerCase()}`}>
                {user.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
