import { useEffect, useState } from "react";
import API from "../api/api";

function BrowseUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Browse Users</h1>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Skills Offered: {user.skillsOffered?.join(", ")}</p>
            <p>Skills Wanted: {user.skillsWanted?.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BrowseUsers;